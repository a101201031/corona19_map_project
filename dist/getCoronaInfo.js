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
    this.save();
  }

  get info() {
    return this.data;
  }

  async load() {
    this.data = await (0, _seoulCoronaCrawler.default)();
  }

  save() {
    _confirmedCases.default.insertMany(this.data);
  }

}

exports.CoronaInfo = CoronaInfo;