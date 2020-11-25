import { Request, Response, Router } from 'express';
import { srcGlobalInfo } from '../../dataSrc/globalCoronaInfo';
import { GlobalCoronaInfoModel, GlobalCoronaInfoTypes } from '../../model/globalCoronaInfo';

export const globalRouter = Router();

globalRouter.get('/', async (req: Request, res: Response) => {
  try {
    const resData: GlobalCoronaInfoTypes[] = await GlobalCoronaInfoModel.find();
    res.status(200).json(resData);
  } catch (err) {
    res.status(500).json({ message: 'SERVER ERROR.' });
  }
});

globalRouter.post('/refresh', async (req: Request, res: Response) => {
  try {
    const srcData: GlobalCoronaInfoTypes = await srcGlobalInfo();
    GlobalCoronaInfoModel.create(srcData);
    res.status(200).json({ message: 'request success' });
  } catch (err) {
    res.status(500).json({ message: 'SERVER ERROR' });
  }
});
