import { Router, Request, Response } from 'express';

import { confirmedCaseRouter } from './confirmedCase';
export const mainRouter = Router();

mainRouter.get('/', (req: Request, res: Response) => {
  const message = 'developing!';
  res.send(message);
});

mainRouter.use('/confirmed-case', confirmedCaseRouter);
