"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmedCasesModel = void 0;
// import { Schema } from 'mongoose';
const typegoose_1 = require("@typegoose/typegoose");
// const Schema = mongoose.Schema;
class ConfirmedCases {
}
__decorate([
    typegoose_1.prop({ unique: true }),
    __metadata("design:type", Number)
], ConfirmedCases.prototype, "confirmedNo", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], ConfirmedCases.prototype, "patienId", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], ConfirmedCases.prototype, "confirmedDate", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], ConfirmedCases.prototype, "residence", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], ConfirmedCases.prototype, "tripHistory", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], ConfirmedCases.prototype, "visitType", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], ConfirmedCases.prototype, "takeAction", void 0);
exports.confirmedCasesModel = typegoose_1.getModelForClass(ConfirmedCases);
// const confirmedCasesSchema = new Schema({
//   confirmedNo: { type: Number, unique: true },
//   patienId: { type: Number },
//   confirmedDate: { type: Date },
//   residence: { type: String },
//   tripHistory: { type: String },
//   visitType: { type: String },
//   takeAction: { type: String },
// });
// module.exports = mongoose.model('ConfirmedCases', confirmedCasesSchema);
//# sourceMappingURL=confirmedCase.js.map