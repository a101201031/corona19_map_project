"use strict";

var _dbConnect = _interopRequireDefault(require("../dbConnect"));

var _confirmedCases = _interopRequireDefault(require("../model/confirmedCases"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dbConnect.default)(); // const confirmedCases = new confirmedCasesModel();

_confirmedCases.default.find((err, confirmedCases) => {
  if (err) {
    console.error(err);
  }

  console.log(confirmedCases);
});