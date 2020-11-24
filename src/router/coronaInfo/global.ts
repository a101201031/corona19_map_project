import { Router, Request, Response } from 'express';
import axios from 'axios';

import { GlobalCoronaInfoModel } from '../../model/globalCoronaInfo';
import { srcGlobalInfo } from '../../dataSrc/globalCoronaInfo';

export const globalRouter = Router();

globalRouter.get('/', async (req: Request, res: Response) => {
  try {
    const resData = await GlobalCoronaInfoModel.find();
    res.status(200).json(resData);
  } catch (err) {
    res.status(500).json({ message: 'SERVER ERROR.' });
  }
});

globalRouter.post('/refresh', async (req: Request, res: Response) => {
  try {
    const srcData = await srcGlobalInfo();
    GlobalCoronaInfoModel.create(srcData);
    res.status(200).json({ message: 'request success' });
  } catch (err) {
    res.status(500).json({ message: 'SERVER ERROR' });
  }
});
