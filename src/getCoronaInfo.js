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

  async save() {
    const result = await confirmedCasesModel.updateMany(this.data);
    console.log('insert');
  }
}
