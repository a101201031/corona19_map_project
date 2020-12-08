import { Request, Response, Router } from 'express';
import { srcGlobalInfo } from '../../dataSrc/globalCoronaInfo';
import { GlobalCoronaInfoModel, GlobalCoronaInfoTypes } from '../../model/globalCoronaInfo';

export const globalRouter = Router();

interface resGlobalTypes {
  message: string;
  data?: GlobalCoronaInfoTypes | GlobalCoronaInfoTypes[] | null;
}

globalRouter.get('/', async (req: Request, res: Response) => {
  const resData: resGlobalTypes = {
    message: '',
  };
  try {
    const data: GlobalCoronaInfoTypes[] = await GlobalCoronaInfoModel.find();
    resData.message = 'success.';
    resData.data = data;
    res.status(200).json(resData);
  } catch (err) {
    resData.message = 'SERVER ERROR.';
    res.status(500).json(resData);
  }
});

globalRouter.post('/refresh', async (req: Request, res: Response) => {
  const resData: resGlobalTypes = {
    message: '',
  };
  try {
    const srcData: GlobalCoronaInfoTypes = await srcGlobalInfo();
    const orgData: GlobalCoronaInfoTypes[] = await GlobalCoronaInfoModel.find();

    if (new Date(srcData.LastUpdate) > orgData[0]?.LastUpdate) {
      const updateResult = await GlobalCoronaInfoModel.updateOne(orgData[0], srcData);
      resData.message = 'data refreshed.';
    } else {
      resData.message = 'data is latest.';
    }
    res.status(200).json(resData);
  } catch (err) {
    resData.message = 'SERVER ERROR.';
    res.status(500).json(resData);
  }
});
