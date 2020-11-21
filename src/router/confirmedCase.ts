import { Router, Request, Response } from 'express';

import { confirmedCasesModel } from '../model/confirmedCase';

export const confirmedCaseRouter = Router();

confirmedCaseRouter.get('/', async (req: Request, res: Response) => {
  const resultData = await confirmedCasesModel.find();
  res.status(200).json({
    message: 'success',
    data: resultData,
  });
});
