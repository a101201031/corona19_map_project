"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _path = require("path");

var _request = _interopRequireDefault(require("request"));

var _cheerio = _interopRequireDefault(require("cheerio"));

var _dayjs = _interopRequireDefault(require("dayjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function seoulCoronaCrawler() {
  const url = 'http://www.seoul.go.kr/coronaV/coronaStatus.do';
  const resultItemNames = ['patienId', 'confirmedDate', 'residence', 'tripHistory', 'visitType'];
  const resultJsonArray = [];
  let resultDate;

  _request.default.get(url, (error, res, html) => {
    if (error) {
      throw error;
    }

    const $ = _cheerio.default.load(html);

    const $updatedDate = $('h5.update-date').children('strong').eq(0);
    console.log(`updateTime: ${$updatedDate.text()}`);
    resultDate = $updatedDate.text();
    const $coronaDataSet = $('table.status-datatable').children('tbody');
    const $indexes = $coronaDataSet.children('tr').children('th').children('p');
    const $items = $coronaDataSet.children('tr').children('td');
    const $takeAction = $items.children('b');

    for (let i = 0; i < $indexes.length; i++) {
      resultJsonArray.push({});
      resultJsonArray[i]._id = $indexes[i].children[0].data;
      resultItemNames.forEach((itemName, idx) => {
        // if ($items[i * 6 + idx].children[0] === undefined) {
        //   resultJson[$indexes[i].children[0].data][itemName] = '-';
        // } else {
        //   resultJson[$indexes[i].children[0].data][itemName] = $items[i * 6 + idx].children[0].data;
        // }
        if ($items[i * 6 + idx].children[0] === undefined) {
          resultJsonArray[i][itemName] = '-';
        } else {
          resultJsonArray[i][itemName] = $items[i * 6 + idx].children[0].data;
        }
      });
      resultJsonArray[i].takeAction = $takeAction[i].children[0] === undefined ? '-' : $takeAction[i].children[0].data;
    }

    console.log(resultJsonArray[3000]);
    console.log(resultDate);
  });
}

seoulCoronaCrawler(); // exports = seoulCoronaCrawler();