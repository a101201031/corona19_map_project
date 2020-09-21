"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoronaInfo = void 0;

var _confirmedCases = _interopRequireDefault(require("./model/confirmedCases"));

var _seoulCoronaCrawler = _interopRequireDefault(require("./crawler/seoulCoronaCrawler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const confirmedCases = new confirmedCasesModel();
class CoronaInfo {
  constructor() {
    this.load();
  }

  get info() {
    return this.data;
  }

  async load() {
    this.data = await (0, _seoulCoronaCrawler.default)();
  }

  save() {
    this.data.map(async (val, index) => {
      // console.log(`confirmedNo : ${val.confirmedNo}`);
      // console.log(val);
      const result = await _confirmedCases.default.updateOne({
        confirmedNo: val.confirmedNo
      }, val, {
        upsert: true
      });
      console.log(`success: ${index}`);
    });
  }

}

exports.CoronaInfo = CoronaInfo;