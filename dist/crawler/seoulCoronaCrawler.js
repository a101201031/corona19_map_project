"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = seoulCoronaCrawler;

var _request = _interopRequireDefault(require("request"));

var _cheerio = _interopRequireDefault(require("cheerio"));

var _axios = _interopRequireDefault(require("axios"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function seoulCoronaCrawler() {
  try {
    const url = 'http://www.seoul.go.kr/coronaV/coronaStatus.do';
    const resultItemNames = ['patienId', 'confirmedDate', 'residence', 'tripHistory', 'visitType'];
    const {
      data: html
    } = await _axios.default.get('http://www.seoul.go.kr/coronaV/coronaStatus.do');

    const $ = _cheerio.default.load(html);

    const $updatedDate = $('h5.update-date').children('strong').eq(0);
    console.log(`updateTime: ${$updatedDate.text()}`);
    const $coronaDataSet = $('table.status-datatable').children('tbody');
    const $indexes = $coronaDataSet.children('tr').children('th').children('p');
    const $items = $coronaDataSet.children('tr').children('td');
    const $takeAction = $items.children('b');
    const indexValues = Object.values($indexes).filter(object => {
      var _object$children$;

      if (object.children && ((_object$children$ = object.children[0]) === null || _object$children$ === void 0 ? void 0 : _object$children$.data) > 0) {
        return true;
      } else {
        return false;
      }
    }); // console.log(indexValues);

    const resultJsonArray = [];
    let i = 0; // for (const _ in Object.values($indexes)) {

    for (const _ in indexValues) {
      var _$indexes$i, _$indexes$i$children, _$indexes$i$children$, _$takeAction$i, _$takeAction$i$childr, _$takeAction$i2, _$takeAction$i2$child, _$takeAction$i2$child2;

      resultJsonArray.push({});
      resultJsonArray[i].confirmedNo = (_$indexes$i = $indexes[i]) === null || _$indexes$i === void 0 ? void 0 : (_$indexes$i$children = _$indexes$i.children) === null || _$indexes$i$children === void 0 ? void 0 : (_$indexes$i$children$ = _$indexes$i$children[0]) === null || _$indexes$i$children$ === void 0 ? void 0 : _$indexes$i$children$.data;
      resultItemNames.forEach((itemName, idx) => {
        var _$items, _$items$children;

        if (((_$items = $items[i * 6 + idx]) === null || _$items === void 0 ? void 0 : (_$items$children = _$items.children) === null || _$items$children === void 0 ? void 0 : _$items$children[0]) === undefined) {
          resultJsonArray[i][itemName] = '-';
        } else {
          var _$items2, _$items2$children, _$items2$children$;

          resultJsonArray[i][itemName] = (_$items2 = $items[i * 6 + idx]) === null || _$items2 === void 0 ? void 0 : (_$items2$children = _$items2.children) === null || _$items2$children === void 0 ? void 0 : (_$items2$children$ = _$items2$children[0]) === null || _$items2$children$ === void 0 ? void 0 : _$items2$children$.data;
        }
      });
      resultJsonArray[i].takeAction = ((_$takeAction$i = $takeAction[i]) === null || _$takeAction$i === void 0 ? void 0 : (_$takeAction$i$childr = _$takeAction$i.children) === null || _$takeAction$i$childr === void 0 ? void 0 : _$takeAction$i$childr[0]) === undefined ? '-' : (_$takeAction$i2 = $takeAction[i]) === null || _$takeAction$i2 === void 0 ? void 0 : (_$takeAction$i2$child = _$takeAction$i2.children) === null || _$takeAction$i2$child === void 0 ? void 0 : (_$takeAction$i2$child2 = _$takeAction$i2$child[0]) === null || _$takeAction$i2$child2 === void 0 ? void 0 : _$takeAction$i2$child2.data;
      ++i;
    }

    return resultJsonArray;
  } catch (e) {
    console.error(e);
    return [];
  }
}