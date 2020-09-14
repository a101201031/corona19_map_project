import request from 'request';
import cheerio from 'cheerio';
import axios from 'axios';
import { compact, values } from 'lodash';

export default async function seoulCoronaCrawler() {
  try {
    const url = 'http://www.seoul.go.kr/coronaV/coronaStatus.do';
    const resultItemNames = ['patienId', 'confirmedDate', 'residence', 'tripHistory', 'visitType'];

    const { data: html } = await axios.get('http://www.seoul.go.kr/coronaV/coronaStatus.do');
    const $ = cheerio.load(html);

    const $updatedDate = $('h5.update-date').children('strong').eq(0);
    console.log(`updateTime: ${$updatedDate.text()}`);
    const $coronaDataSet = $('table.status-datatable').children('tbody');
    const $indexes = $coronaDataSet.children('tr').children('th').children('p');
    const $items = $coronaDataSet.children('tr').children('td');
    const $takeAction = $items.children('b');
    const indexValues = Object.values($indexes).filter((object) => {
      if (object.children && object.children[0]?.data > 0) {
        return true;
      } else {
        return false;
      }
    });
    // console.log(indexValues);

    const resultJsonArray = [];
    let i = 0;
    // for (const _ in Object.values($indexes)) {
    for (const _ in indexValues) {
      resultJsonArray.push({});
      resultJsonArray[i].confirmedNo = $indexes[i]?.children?.[0]?.data;

      resultItemNames.forEach((itemName, idx) => {
        if ($items[i * 6 + idx]?.children?.[0] === undefined) {
          resultJsonArray[i][itemName] = '-';
        } else {
          resultJsonArray[i][itemName] = $items[i * 6 + idx]?.children?.[0]?.data;
        }
      });
      resultJsonArray[i].takeAction =
        $takeAction[i]?.children?.[0] === undefined ? '-' : $takeAction[i]?.children?.[0]?.data;
      ++i;
    }

    return resultJsonArray;
  } catch (e) {
    console.error(e);
    return [];
  }
}
