import { Document, model, Schema } from 'mongoose';

export interface CountryCoronaInfoTypes {
  Country: string;
  CountryCode: string;
  NewConfirmed: number;
  TotalConfrmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  LastUpdate: Date;
}

const CountryCoronaInfoSchema = new Schema({
  Country: { type: String, required: true },
  CountryCode: { type: String, required: true },
  NewConfirmed: { type: Number, required: true },
  TotalConfrmed: { type: Number, required: true },
  NewDeaths: { type: Number, required: true },
  TotalDeaths: { type: Number, required: true },
  NewRecovered: { type: Number, required: true },
  TotalRecovered: { type: Number, required: true },
  LastUpdate: { type: Date, required: true },
});

export interface CountryCoronaInfoDocument extends CountryCoronaInfoTypes, Document {}

export const CountryCoronaInfoModel = model<CountryCoronaInfoDocument>('CountriesCoronaInfo', CountryCoronaInfoSchema);
