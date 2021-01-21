import { srcCountriesInfo } from './dataSrc/countryCoronaInfo';
import { srcGlobalInfo } from './dataSrc/globalCoronaInfo';
import { CountryCoronaInfoTypes, CountryCoronaInfoModel } from './model/countryCoronaInfo';
import { GlobalCoronaInfoTypes, GlobalCoronaInfoModel } from './model/globalCoronaInfo';

interface DataMgmtTypes {
  Countries: CountryCoronaInfoTypes[] | null;
  Global: GlobalCoronaInfoTypes | null;
}

export class DataMgmt implements DataMgmtTypes {
  Countries: CountryCoronaInfoTypes[] | null;
  Global: GlobalCoronaInfoTypes | null;

  constructor() {
    this.Countries = null;
    this.Global = null;
    this.load();
  }
  async load() {
    this.Countries = await srcCountriesInfo();
    this.Global = await srcGlobalInfo();
  }
  async sync() {
    console.log('sync...');
    await this.load();
    this.countriesUpdate();
    this.globalUpdate();
  }
  async countriesUpdate() {
    this.Countries?.forEach(async (val: CountryCoronaInfoTypes) => {
      const dbCountry: CountryCoronaInfoTypes | null = await CountryCoronaInfoModel.findOne({
        CountryCode: val.CountryCode,
      });

      if (!dbCountry) {
        const insertCountryData = await CountryCoronaInfoModel.create(val);
      } else if (new Date(val.LastUpdate) > dbCountry.LastUpdate) {
        const updateCountryData = await CountryCoronaInfoModel.updateOne(dbCountry, val);
      }
    });
  }
  async globalUpdate() {
    const dbGlobal: GlobalCoronaInfoTypes[] = await GlobalCoronaInfoModel.find();

    if (!this.Global) {
      return;
    } else if (new Date(this.Global?.LastUpdate) > dbGlobal[0].LastUpdate) {
      const updateGlobalData = await GlobalCoronaInfoModel.updateOne(dbGlobal[0], this.Global);
    }
  }
}
