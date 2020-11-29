import { Request, Response, Router } from 'express';
import { CountryCoronaInfoModel, CountryCoronaInfoTypes } from '../../model/countryCoronaInfo';

export const countryRouter = Router();

interface resCountryTypes {
  message: string;
  data?: CountryCoronaInfoTypes | CountryCoronaInfoTypes[] | null;
}

countryRouter.get('/', async (req: Request, res: Response) => {
  const { body } = req;
  const resData: resCountryTypes = {
    message: '',
  };
  try {
    if (body.CountryCode) {
      const data: CountryCoronaInfoTypes | null = await CountryCoronaInfoModel.findOne({
        CountryCode: body.CountryCode,
      });
      resData.data = data;
      resData.message = resData.data ? 'success.' : 'not found country.';
    } else {
      const data: CountryCoronaInfoTypes[] = await CountryCoronaInfoModel.find();
      resData.data = data;
      resData.message = 'success.';
    }
    res.status(resData.data ? 200 : 400).json(resData);
  } catch (err) {
    resData.message = 'SERVER ERROR.';
    res.status(500).json(resData);
  }
});
