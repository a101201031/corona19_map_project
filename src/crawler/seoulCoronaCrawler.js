import request from 'request';
import cheerio from 'cheerio';

export default function seoulCoronaCrawler(callback) {
  const url = 'http://www.seoul.go.kr/coronaV/coronaStatus.do';
  const resultItemNames = ['patienId', 'confirmedDate', 'residence', 'tripHistory', 'visitType'];

  const resultJsonArray = [];
  request.get(url, (error, res, html) => {
    if (error) {
      throw error;
    }

    const $ = cheerio.load(html);

    const $updatedDate = $('h5.update-date').children('strong').eq(0);
    console.log(`updateTime: ${$updatedDate.text()}`);

    const $coronaDataSet = $('table.status-datatable').children('tbody');
    const $indexes = $coronaDataSet.children('tr').children('th').children('p');
    const $items = $coronaDataSet.children('tr').children('td');
    const $takeAction = $items.children('b');

    for (let i = 0; i < $indexes.length; i++) {
      resultJsonArray.push({});
      resultJsonArray[i].confirmedNo = $indexes[i].children[0].data;

      resultItemNames.forEach((itemName, idx) => {
        if ($items[i * 6 + idx].children[0] === undefined) {
          resultJsonArray[i][itemName] = '-';
        } else {
          resultJsonArray[i][itemName] = $items[i * 6 + idx].children[0].data;
        }
      });
      resultJsonArray[i].takeAction = $takeAction[i].children[0] === undefined ? '-' : $takeAction[i].children[0].data;
    }
    console.log(resultJsonArray);
  });
  callback(resultJsonArray);
}
