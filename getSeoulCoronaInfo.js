const fs = require('fs');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');
const dayjs = require('dayjs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

function dbConnect() {
  mongoose.connect(process.env.DB_FULL_URL, (err) => {
    if (err) {
      console.log('mongoDB Connection Error.', err);
    }
    console.log('mongoDB is Connected.');
  });
}

function insertData(data) {
  return () => {};
}

dotenv.config();
dbConnect();

const url = 'http://www.seoul.go.kr/coronaV/coronaStatus.do';

const resultItemNames = ['patienId', 'confirmedDate', 'residence', 'tripHistory', 'visitType', 'takeAction'];
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
  for (let i = 0; i < $indexes.length; i++) {
    resultJson[i][_id] = $indexes[i];
    // resultJson[$indexes[i].children[0].data] = {};
    resultItemNames.forEach((itemName, idx) => {
      // if ($items[i * 6 + idx].children[0] === undefined) {
      //   resultJson[$indexes[i].children[0].data][itemName] = '-';
      // } else {
      //   resultJson[$indexes[i].children[0].data][itemName] = $items[i * 6 + idx].children[0].data;
      // }
      if ($items[i * 6 + idx].children[0] === undefined) {
        resultJson[itemName] = '-';
      }
      resultJson[itemName] = $items[i * 6 + idx].children[0];
    });
  }

  const dataDir = path.join(__dirname, 'coronaData');
  const myDate = dayjs().format('YYYYMMDD');
  fs.writeFileSync(`${dataDir}/${myDate}.txt`, JSON.stringify(resultJson), 'utf8');
});