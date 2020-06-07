import { Router, request, response } from 'express';
import { coronaDataRouter } from './responseCoronaData';
export const apiRouter = Router();

apiRouter.use('/responseCsoronaData', coronaDataRouter);
