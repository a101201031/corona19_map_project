import axios from 'axios';
import { GlobalCoronaInfoTypes } from '../model/globalCoronaInfo';

export const srcGlobalInfo = async () => {
  try {
    const res = await axios.get('https://api.covid19api.com/summary');
    const returnObj: GlobalCoronaInfoTypes = {
      NewConfirmed: res.data.Global.NewConfirmed,
      TotalConfirmed: res.data.Global.TotalConfirmed,
      NewDeaths: res.data.Global.NewDeaths,
      TotalDeaths: res.data.Global.TotalDeaths,
      NewRecovered: res.data.Global.NewRecovered,
      TotalRecovered: res.data.Global.TotalRecovered,
      LastUpdate: res.data.Date,
    };
    return returnObj;
  } catch (err) {
    throw err;
  }
};
