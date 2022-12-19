import { Router, Response, Request } from 'express'

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json([{
   task: 'task1' 
  }])
})

export default router;