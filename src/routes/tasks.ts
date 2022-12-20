import { Router, Response, Request } from 'express'
import { Task, TaskAttributes } from '../services/db';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  Task.findAll().then(r => {
    res.json(r);
  });
})

router.put('/:id', (req: Request, res: Response) => {
  const task: any = {
    ...req.body,
    username: req?.params?.username || '',
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

router.get('/:username', (req: Request, res: Response) => {
  Task.findAll({where: {username: req?.params?.username}}).then(r => {
    res.json(r);
  });
})

router.post('/:username', (req: Request, res: Response) => {
  const task: any = {
    ...req.body,
    username: req?.params?.username || '',
    createdAt: new Date(),
    updatedAt: new Date()
  }

  Task.create(task).then(() => {
    res.json({msj: 'success'});
  });
})

export default router;