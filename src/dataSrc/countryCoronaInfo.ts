import axios from 'axios';
import { CountryCoronaInfoTypes } from '../model/countryCoronaInfo';

interface sourceCountryCoronaInfoTypes extends CountryCoronaInfoTypes {
  Date: Date;
}

export const srcCountriesInfo = async () => {
  try {
    const res = await axios.get('https://api.covid19api.com/summary');
    const returnArray: CountryCoronaInfoTypes[] = [];

    res.data.Countries.forEach((val: sourceCountryCoronaInfoTypes) => {
      const pushData: CountryCoronaInfoTypes = {
        Country: val.Country,
        CountryCode: val.CountryCode,
        NewConfirmed: val.NewConfirmed,
        TotalConfirmed: val.TotalConfirmed,
        NewDeaths: val.NewDeaths,
        TotalDeaths: val.TotalDeaths,
        NewRecovered: val.NewRecovered,
        TotalRecovered: val.TotalRecovered,
        LastUpdate: val.Date,
      };
      returnArray.push(pushData);
    });
    return returnArray;
  } catch (err) {
    throw err;
  }
};
