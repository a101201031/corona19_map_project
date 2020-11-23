import { prop, getModelForClass } from '@typegoose/typegoose';

class GlobalCoronaInfo {
  @prop({ required: true })
  public newConfirmed!: Number;
  @prop({ required: true })
  public totalConfirmed!: Number;
  @prop({ required: true })
  public newDeaths!: Number;
  @prop({ required: true })
  public totalDeaths!: Number;
  @prop({ required: true })
  public newRecovered!: Number;
  @prop({ required: true })
  public totalRecovered!: Number;
  @prop({ required: true })
  public lastUpdate!: Date;
}
export const GlobalCoronaInfoModel = getModelForClass(GlobalCoronaInfo);
