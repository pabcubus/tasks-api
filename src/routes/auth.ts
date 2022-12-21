import 'dotenv/config';
import express, { Request, Response } from 'express';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import { User, UserAttributes } from '../services/db';

const Auth = express.Router();

Auth.use(function(req, res, next) {
  next();
});

Auth.post('/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    if (!username) return res.sendStatus(400)

    const unixTimeNow = moment().unix();
    let user: any = await User.findOne({ where: { username }, raw: true });
    const tokenExpiry: number = moment(user.tokenExpiry).unix();
    if (user && (!user.tokenExpiry || tokenExpiry <= unixTimeNow)) {
      const tokenExpiryFuture = moment().add(1, 'hours').toDate();
      user = {
        ...user as UserAttributes,
        token: generateAccessToken({
          username: user.username, 
          password: user.password
        }),
        tokenExpiry: tokenExpiryFuture
      }

      await User.update(user, { where: { id: user.id }});
      
      res.json(user)
    } else if (user && moment(user.tokenExpiryFuture).unix() >= moment().unix()) {
      res.json(user)
    } else {
      res.status(400).json(null)
    }
  } catch (error) {
    res.status(400).json(error)
  }
})

function generateAccessToken(user: any) {
  return jwt.sign(user, (process.env.ACCESS_TOKEN_SECRET as string), { expiresIn: '1h' })
}

function authenticateToken(req: Request, res: Response, next: any) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, (process.env.ACCESS_TOKEN_SECRET as string), (err) => {
    if (err) return res.status(403).json({msj: err.message || 'Forbidden User'})
    next()
  })
}

export {
  Auth,
  authenticateToken
};