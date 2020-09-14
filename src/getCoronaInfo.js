import confirmedCasesModel from './model/confirmedCases';
import seoulCoronaCrawler from './crawler/seoulCoronaCrawler';

const confirmedCases = new confirmedCasesModel();

export class CoronaInfo {
  constructor() {
    this.save();
  }

  async save() {
    const coronaData = await seoulCoronaCrawler();
    console.log(coronaData[0]);
    setTimeout(() => {
      console.log(coronaData[coronaData.length - 1]);
    }, 3000);
  }
}
