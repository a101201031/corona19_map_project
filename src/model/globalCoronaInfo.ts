import { Document, model, Schema } from 'mongoose';

export interface GlobalCoronaInfoTypes {
  newConfirmed: number;
  totalConfirmed: number;
  newDeaths: number;
  totalDeaths: number;
  newRecovered: number;
  totalRecovered: number;
  lastUpdate: Date;
}

const GlobalCoronaInfoSchema = new Schema({
  newConfirmed: { type: Number, required: true },
  totalConfrmed: { type: Number, required: true },
  newDeaths: { type: Number, required: true },
  totalDeaths: { type: Number, required: true },
  newRecovered: { type: Number, required: true },
  totalRecovered: { type: Number, required: true },
  lastUpdate: { type: Date, required: true },
});

export interface GlobalCoronaInfoDocument extends GlobalCoronaInfoTypes, Document {}

export const GlobalCoronaInfoModel = model<GlobalCoronaInfoDocument>('GlobalCoronaInfo', GlobalCoronaInfoSchema);
