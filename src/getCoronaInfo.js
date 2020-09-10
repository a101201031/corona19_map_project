import confirmedCasesModel from './model/confirmedCases';
import seoulCoronaCrawler from './crawler/seoulCoronaCrawler';

const confirmedCases = new confirmedCasesModel();

seoulCoronaCrawler((datas) => {
  datas.forEach((data) => {});
});
