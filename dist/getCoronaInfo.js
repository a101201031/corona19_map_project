"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoronaInfo = void 0;

var _confirmedCases = _interopRequireDefault(require("./model/confirmedCases"));

var _seoulCoronaCrawler = _interopRequireDefault(require("./crawler/seoulCoronaCrawler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const confirmedCases = new _confirmedCases.default();

class CoronaInfo {
  constructor() {
    this.save();
  }

  async save() {
    const coronaData = await (0, _seoulCoronaCrawler.default)();
    console.log(coronaData[0]);
    setTimeout(() => {
      console.log(coronaData[coronaData.length - 1]);
    }, 3000);
  }

}

exports.CoronaInfo = CoronaInfo;