import express, { Express, Response, Request } from 'express';
import Tasks from './services/tasks';
import dotenv from 'dotenv';

const app: Express = express();

app.get('/example', (req: Request, res: Response) => {
  res.json({res: 'nice!!!'});
})

app.use('/tasks', Tasks);

app.listen(8000);