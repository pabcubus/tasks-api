import { Router, Response, Request } from 'express'
import { Task, User, TaskAttributes } from '../services/db';
import { authenticateToken } from './auth';

const router: Router = Router();

router.use(authenticateToken);

router.get('/', async (req: Request, res: Response) => {  
  const token: string = getAuthToken(req);
  const user: any = await User.findOne({where: {token}})

  if (!user) {
    res.status(400).json({msj: 'user not found'});
    return; 
  }

  Task.findAll({where: {userId: user.id}}).then(r => {
    res.json(r);
  });
})

router.put('/:id', (req: Request, res: Response) => {
  const task: any = {
    ...req.body,
    updatedAt: new Date()
  }

  Task.update(task, {
    where: {
      id: req?.params?.id
    }
  }).then(() => {
    res.json({msj: 'success'});
  });
})

router.post('/', async (req: Request, res: Response) => {
  const token: string = getAuthToken(req);
  const user: any = await User.findOne({where: {token}})

  if (!user) {
    res.status(400).json({msj: 'user not found'});
    return; 
  }

  const task: any = {
    ...req.body,
    userId: user.id,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  Task.create(task).then(() => {
    res.json({msj: 'success'});
  });
})

function getAuthToken(req: Request): string {
  const authHeader: string = req.headers['authorization'] || '';
  const token: string = authHeader.split(' ')[1];
  return token;
}

export default router;