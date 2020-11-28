import { Request, Response, Router } from 'express';
import { countryRouter } from './coronaInfo/country';
import { globalRouter } from './coronaInfo/global';

export const mainRouter = Router();

mainRouter.get('/', (req: Request, res: Response) => {
  const message = 'developing!';
  res.send(message);
});

mainRouter.use('/global-corona-info', globalRouter);
mainRouter.use('/countries-corona-info', countryRouter);
