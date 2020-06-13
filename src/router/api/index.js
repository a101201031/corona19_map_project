import { Router, request, response } from 'express';

import { confirmedCasesRouter } from './confirmedCases';
export const apiRouter = Router();

apiRouter.use('/confirmed-cases', confirmedCasesRouter);
