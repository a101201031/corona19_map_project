import { Document, model, Schema } from 'mongoose';

export interface CountriesCoronaInfoTypes {
  country: string;
  countryCode: string;
  newConfirmed: number;
  totalConfrmed: number;
  newDeaths: number;
  totalDeaths: number;
  newRecovered: number;
  totalRecovered: number;
  lastUpdate: Date;
}

const CountriesCoronaInfoSchema = new Schema({
  country: { type: String, required: true },
  countryCode: { type: String, required: true },
  newConfirmed: { type: Number, required: true },
  totalConfrmed: { type: Number, required: true },
  newDeaths: { type: Number, required: true },
  totalDeaths: { type: Number, required: true },
  newRecovered: { type: Number, required: true },
  totalRecovered: { type: Number, required: true },
  lastUpdate: { type: Date, required: true },
});

export interface CountriesCoronaInfoDocument extends CountriesCoronaInfoTypes, Document {}

export const CountriesCoronaInfoModel = model<CountriesCoronaInfoDocument>(
  'CountriesCoronaInfo',
  CountriesCoronaInfoSchema
);
