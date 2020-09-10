"use strict";

var _confirmedCases = _interopRequireDefault(require("./model/confirmedCases"));

var _seoulCoronaCrawler = _interopRequireDefault(require("./crawler/seoulCoronaCrawler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const seouleConfirmedCases = (0, _seoulCoronaCrawler.default)(data => {
  console.log(data);
});