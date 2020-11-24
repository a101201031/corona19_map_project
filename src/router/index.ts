import { Router, Request, Response } from 'express';

import { globalRouter } from './coronaInfo/global';

export const mainRouter = Router();

mainRouter.get('/', (req: Request, res: Response) => {
  const message = 'developing!';
  res.send(message);
});

mainRouter.use('/global-corona-info', globalRouter);
