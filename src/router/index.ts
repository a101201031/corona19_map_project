import { Router, Request, Response } from 'express';

export const mainRouter = Router();

mainRouter.get('/', (req: Request, res: Response) => {
  const message = 'developing!';
  res.send(message);
});
