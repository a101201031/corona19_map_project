import { Document, model, Schema } from 'mongoose';

export interface GlobalCoronaInfoTypes {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  LastUpdate: Date;
}

const GlobalCoronaInfoSchema = new Schema({
  NewConfirmed: { type: Number, required: true },
  TotalConfirmed: { type: Number, required: true },
  NewDeaths: { type: Number, required: true },
  TotalDeaths: { type: Number, required: true },
  NewRecovered: { type: Number, required: true },
  TotalRecovered: { type: Number, required: true },
  LastUpdate: { type: Date, required: true },
});

export interface GlobalCoronaInfoDocument extends GlobalCoronaInfoTypes, Document {}

export const GlobalCoronaInfoModel = model<GlobalCoronaInfoDocument>('GlobalCoronaInfo', GlobalCoronaInfoSchema);
