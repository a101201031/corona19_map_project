import { Request, Response, Router } from 'express';
import { CountryCoronaInfoModel, CountryCoronaInfoTypes } from '../../model/countryCoronaInfo';

export const countryRouter = Router();

interface resCountryTypes {
  message: string;
  data?: CountryCoronaInfoTypes | CountryCoronaInfoTypes[] | null;
}

countryRouter.get('/', async (req: Request, res: Response) => {
  const resData: resCountryTypes = {
    message: '',
  };
  try {
    const data: CountryCoronaInfoTypes[] = await CountryCoronaInfoModel.find();
    resData.data = data;
    resData.message = resData.data ? 'success.' : 'not found data.';
    res.status(resData ? 200 : 400).json(resData);
  } catch (err) {
    resData.message = 'SERVER ERROR.';
    res.status(500).json(resData);
  }
});

countryRouter.get('/:CountryCode', async (req: Request, res: Response) => {
  const reqCountryCode = req.params.CountryCode;
  const resData: resCountryTypes = {
    message: '',
  };
  try {
    const data: CountryCoronaInfoTypes | null = await CountryCoronaInfoModel.findOne({
      CountryCode: reqCountryCode.toUpperCase(),
    });
    resData.data = data;
    resData.message = resData.data ? 'success.' : 'not found country.';
    res.status(resData.data ? 200 : 400).json(resData);
  } catch (err) {
    resData.message = 'SERVER ERROR.';
    res.status(500).json(resData);
  }
});
