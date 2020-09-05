const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const confirmedDateSchema = new Schema({
  _id: {},
  patienId: {},
  confiremdDate: {},
  residence: {},
  tripHistory: {},
  visitType: {},
  takeAction: {},
});

module.exports = mongoose.model('confirmedData', confirmedDateSchema);
