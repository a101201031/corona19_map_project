"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.srcGlobalInfo = void 0;
const axios_1 = __importDefault(require("axios"));
exports.srcGlobalInfo = async () => {
    try {
        const res = await axios_1.default.get('https://api.covid19api.com/summary');
        const returnObj = {
            NewConfirmed: res.data.Global.NewConfirmed,
            TotalConfirmed: res.data.Global.TotalConfirmed,
            NewDeaths: res.data.Global.NewDeaths,
            TotalDeaths: res.data.Global.TotalDeaths,
            NewRecovered: res.data.Global.NewRecovered,
            TotalRecovered: res.data.Global.TotalRecovered,
            LastUpdate: res.data.Date,
        };
        return returnObj;
    }
    catch (err) {
        throw err;
    }
};
//# sourceMappingURL=globalCoronaInfo.js.map