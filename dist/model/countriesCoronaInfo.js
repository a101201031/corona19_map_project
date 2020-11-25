"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesCoronaInfoModel = void 0;
const mongoose_1 = require("mongoose");
const CountriesCoronaInfoSchema = new mongoose_1.Schema({
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
exports.CountriesCoronaInfoModel = mongoose_1.model('CountriesCoronaInfo', CountriesCoronaInfoSchema);
//# sourceMappingURL=countriesCoronaInfo.js.map