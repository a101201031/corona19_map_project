import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const confirmedCasesSchema = new Schema({
  confiremdNo: { type: Number, unique: true, index: true },
  patienId: { type: Number },
  confiremdDate: { type: Date },
  residence: { type: String },
  tripHistory: { type: String },
  visitType: { type: String },
  takeAction: { type: String },
});

module.exports = mongoose.model('confirmedCases', confirmedCasesSchema);
