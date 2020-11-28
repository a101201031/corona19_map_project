"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryCoronaInfoModel = void 0;
const mongoose_1 = require("mongoose");
const CountryCoronaInfoSchema = new mongoose_1.Schema({
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
exports.CountryCoronaInfoModel = mongoose_1.model('CountriesCoronaInfo', CountryCoronaInfoSchema);
//# sourceMappingURL=countryCoronaInfo.js.map