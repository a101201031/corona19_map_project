const path = require('path');
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

// set data directory
const dataDir = path.join(__dirname, '../data');

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

const resultJson = {};
request.get(url, (error, res, html) => {
  if (error) {
    throw error;
  }
  const $ = cheerio.load(html);
  // get update-time (source data)
  const $sourceDate = $('h5.update-date').children('strong').eq(0);
  console.log($sourceDate.text());
  resultJson.date = $sourceDate.text();
  const $allData = $('table.status-datatable').children('tbody');
  const $confirmedIndex = $allData.children('tr').children('th').children('p');
  const $confiremdInfo = $allData.children('tr').children('td');
  // console.log($confirmedIndex[1].children[0].data);
  for (var i = 0; i < $confirmedIndex.length; i++) {
    // console.log($confirmedIndex[i].children[0].data);
    resultJson[$confirmedIndex[i].children[0].data] = {
      patienId: $confiremdInfo[i * 6].children[0].data,
      confiremdDate: $confiremdInfo[i * 6 + 1].children[0].data,
      residence: $confiremdInfo[i * 6 + 2].children[0].data,
      tripHistory: $confiremdInfo[i * 6 + 3].children[0].data,
      visitType: $confiremdInfo[i * 6 + 4].children[0].data,
      takeAction: $confiremdInfo[i * 6 + 5].children[0].data,
    };
  }
  console.log(resultJson);
  /* old way
  // change to array
  const dataArr = $allData.children('tr').text().split('\n');
  // replace \t
  const regExpTab = new RegExp('\t', 'g');
  for (var i = 0; i < dataArr.length; i++) {
    dataArr[i] = dataArr[i].replace(regExpTab, '');
    // console.log(i + ' : ' + dataArr[i]);
  }
  */
  // data Save (YYYYMMDD.txt)
  fs.writeFileSync(`${dataDir}/${myDate}.txt`, JSON.stringify(resultJson), 'utf8');
});
