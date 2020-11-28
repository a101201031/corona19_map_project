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
      console.log(resData.data);
      resData.message = resData.data ? 'success.' : 'not found country.';
    } else {
      const data: CountryCoronaInfoTypes[] = await CountryCoronaInfoModel.find();
      resData.data = data;
      resData.message = 'success.';
    }
    res.status(200).json(resData);
  } catch (err) {
    res.status(500).json({ message: 'SERVER ERROR.' });
  }
});
