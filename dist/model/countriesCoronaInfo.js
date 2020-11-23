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
exports.CountriesCoronaInfoModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
class CountriesCoronaInfo {
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], CountriesCoronaInfo.prototype, "country", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], CountriesCoronaInfo.prototype, "countryCode", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Number)
], CountriesCoronaInfo.prototype, "newConfirmed", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Number)
], CountriesCoronaInfo.prototype, "totalConfirmed", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Number)
], CountriesCoronaInfo.prototype, "newDeaths", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Number)
], CountriesCoronaInfo.prototype, "totalDeaths", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Number)
], CountriesCoronaInfo.prototype, "newRecovered", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Number)
], CountriesCoronaInfo.prototype, "totalRecovered", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Date)
], CountriesCoronaInfo.prototype, "lastUpdate", void 0);
exports.CountriesCoronaInfoModel = typegoose_1.getModelForClass(CountriesCoronaInfo);
//# sourceMappingURL=countriesCoronaInfo.js.map