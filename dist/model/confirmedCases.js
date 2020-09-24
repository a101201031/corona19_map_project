"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose.default.Schema;
const confirmedCasesSchema = new Schema({
  confirmedNo: {
    type: Number,
    unique: true
  },
  patienId: {
    type: Number
  },
  confirmedDate: {
    type: Date
  },
  residence: {
    type: String
  },
  tripHistory: {
    type: String
  },
  visitType: {
    type: String
  },
  takeAction: {
    type: String
  }
});
module.exports = _mongoose.default.model('ConfirmedCases', confirmedCasesSchema);