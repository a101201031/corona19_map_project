import axios from 'axios';

export const srcGlobalInfo = async () => {
  try {
    const res = await axios.get('https://api.covid19api.com/summary');
    const returnObj = {
      newConfirmed: res.data.Global.NewConfirmed,
      totalConfirmed: res.data.Global.TotalConfirmed,
      newDeaths: res.data.Global.NewDeaths,
      totalDeaths: res.data.Global.TotalDeaths,
      newRecovered: res.data.Global.NewRecovered,
      totalRecovered: res.data.Global.TotalRecovered,
      lastUpdate: res.data.Date,
    };
    return returnObj;
  } catch (err) {
    return err;
  }
};
