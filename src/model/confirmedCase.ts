import { prop, getModelForClass } from '@typegoose/typegoose';

class ConfirmedCases {
  @prop({ unique: true })
  public confirmedNo!: Number;
  @prop()
  public patienId?: Number;
  @prop()
  public confirmedDate?: String;
  @prop()
  public residence?: String;
  @prop()
  public tripHistory?: String;
  @prop()
  public visitType?: String;
  @prop()
  public takeAction?: String;
}
export const confirmedCasesModel = getModelForClass(ConfirmedCases);
