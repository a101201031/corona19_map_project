"use strict";

var _dbConnect = _interopRequireDefault(require("../dbConnect"));

var _confirmedCases = _interopRequireDefault(require("../model/confirmedCases"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dbConnect.default)();
const confirmedCases = new _confirmedCases.default();
confirmedCases.confirmedNo = 1;
confirmedCases.patienId = 1; // confirmedCases.confirmedDate = '';

confirmedCases.residence = '지역';
confirmedCases.tripHistory = '집';
confirmedCases.visitType = '모름';
confirmedCases.takeAction = '자가격리중';
confirmedCases.save(err => {
  if (err) {
    console.error(err);
  }

  console.log('success');
});