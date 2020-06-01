import { Router, request, response } from 'express';
import { coronaDataRouter } from './coronaData';
export const apiRouter = Router();

apiRouter.use('/coronaData', coronaDataRouter);
