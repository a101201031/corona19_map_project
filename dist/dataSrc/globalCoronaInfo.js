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
            newConfirmed: res.data.Global.NewConfirmed,
            totalConfirmed: res.data.Global.TotalConfirmed,
            newDeaths: res.data.Global.NewDeaths,
            totalDeaths: res.data.Global.TotalDeaths,
            newRecovered: res.data.Global.NewRecovered,
            totalRecovered: res.data.Global.TotalRecovered,
            lastUpdate: res.data.Date,
        };
        return returnObj;
    }
    catch (err) {
        return err;
    }
};
//# sourceMappingURL=globalCoronaInfo.js.map