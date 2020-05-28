const fs = require('fs');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');
const dayjs = require('dayjs');

const url = 'http://www.seoul.go.kr/coronaV/coronaStatus.do';

const resultItemNames = ['patienId', 'confiremdDate', 'residence', 'tripHistory', 'visitType', 'takeAction'];
const resultJson = {};
request.get(url, (error, res, html) => {
  if (error) {
    throw error;
  }

  const $ = cheerio.load(html);

  const $updatedDate = $('h5.update-date').children('strong').eq(0);
  console.log(`updateTime: ${$updatedDate.text()}`);
  resultJson.date = $updatedDate.text();

  const $coronaDataSet = $('table.status-datatable').children('tbody');
  const $indexes = $coronaDataSet.children('tr').children('th').children('p');
  const $items = $coronaDataSet.children('tr').children('td');
  console.log($items[41].children[0].data);
  for (let i = 0; i < $indexes.length; i++) {
    resultJson[$indexes[i].children[0].data] = {};
    resultItemNames.forEach((itemName, idx) => {
      resultJson[$indexes[i].children[0].data][itemName] = $items[i * 6 + idx].children[0].data;
    });
  }

  const dataDir = path.join(__dirname, 'coronaData');
  const myDate = dayjs().format('YYYYMMDD');
  fs.writeFileSync(`${dataDir}/${myDate}.txt`, JSON.stringify(resultJson), 'utf8');
});
