const path = require('path');
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

// set data directory
const dataDir = path.join(__dirname, '..');

// date format YYYYMMDD

function dateToYYYYMMDD(date) {
  const year = date.getFullYear();
  const month = date.getMonth() <= 8 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  const day = date.getDate() <= 9 ? '0' + date.getDate() : date.getDate();
  return year + '' + month + '' + day;
}

let getDate = new Date();
let myDate = dateToYYYYMMDD(getDate);

// Farsing Seoul CoronaV Page
url = 'http://www.seoul.go.kr/coronaV/coronaStatus.do';
resultArr = [];
request.get(url, (error, res, html) => {
  if (error) {
    throw error;
  }
  const $ = cheerio.load(html);
  const $allData = $('table.status-datatable').children('tbody');
  // change to array
  const dataArr = $allData.children('tr').text().split('\n');
  // replace \t
  const regExpTab = new RegExp('\t', 'g');
  for (var i = 0; i < dataArr.length; i++) {
    dataArr[i] = dataArr[i].replace(regExpTab, '');
    // console.log(i + ' : ' + dataArr[i]);
  }
  // data Save (YYYYMMDD.txt)
  fs.writeFileSync(`${dataDir}/${myDate}.txt`, dataArr.join('\n'), 'utf8');
});
