"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.srcCountriesInfo = void 0;
const axios_1 = __importDefault(require("axios"));
exports.srcCountriesInfo = async () => {
    try {
        const res = await axios_1.default.get('https://api.covid19api.com/summary');
        const returnArray = [];
        res.data.Countries.forEach((val) => {
            const pushData = {
                Country: val.Country,
                CountryCode: val.CountryCode,
                NewConfirmed: val.NewConfirmed,
                TotalConfrmed: val.TotalConfirmed,
                NewDeaths: val.NewDeaths,
                TotalDeaths: val.TotalDeaths,
                NewRecovered: val.NewRecovered,
                TotalRecovered: val.TotalRecovered,
                LastUpdate: val.Date,
            };
            returnArray.push(pushData);
        });
        return returnArray;
    }
    catch (err) {
        throw err;
    }
};
//# sourceMappingURL=countryCoronaInfo.js.map