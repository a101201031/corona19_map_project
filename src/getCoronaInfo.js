import confirmedCasesModel from './model/confirmedCases';
import seoulCoronaCrawler from './crawler/seoulCoronaCrawler';

// const confirmedCases = new confirmedCasesModel();

export class CoronaInfo {
  constructor() {
    this.load();
  }

  get info() {
    return this.data;
  }

  async load() {
    this.data = await seoulCoronaCrawler();
  }

  save() {
    this.data.map(async (val, index) => {
      // console.log(`confirmedNo : ${val.confirmedNo}`);
      // console.log(val);
      const result = await confirmedCasesModel.updateOne({ confirmedNo: val.confirmedNo }, val, { upsert: true });
      console.log(`success: ${index}`);
    });
  }
}
