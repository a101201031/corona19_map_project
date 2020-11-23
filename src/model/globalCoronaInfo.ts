import { prop, getModelForClass } from '@typegoose/typegoose';

class GlobalCoronaInfo {
  @prop()
  public newConfirmed?: Number;
  @prop()
  public totalConfirmed?: Number;
  @prop()
  public newDeaths?: Number;
  @prop()
  public totalDeaths?: Number;
  @prop()
  public newRecovered?: Number;
  @prop()
  public totalRecovered?: Number;
  @prop()
  public lastUpdate?: Date;
}
export const GlobalCoronaInfoModel = getModelForClass(GlobalCoronaInfo);
