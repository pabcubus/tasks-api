import express, { Express, Response, Request } from 'express';
import Tasks from './routes/tasks';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/example', (req: Request, res: Response) => {
  res.json({res: 'nice!!!'});
})

app.use('/tasks', Tasks);

app.listen(8000);