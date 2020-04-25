import { Router, request, response } from 'express';
import { apiRouter } from './api';
import { pageRouter } from './page';

export const mainRouter = Router();

mainRouter.use('/api', apiRouter);
mainRouter.use('/', pageRouter);
