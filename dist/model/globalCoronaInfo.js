"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalCoronaInfoModel = void 0;
const mongoose_1 = require("mongoose");
const GlobalCoronaInfoSchema = new mongoose_1.Schema({
    newConfirmed: { type: Number, required: true },
    totalConfrmed: { type: Number, required: true },
    newDeaths: { type: Number, required: true },
    totalDeaths: { type: Number, required: true },
    newRecovered: { type: Number, required: true },
    totalRecovered: { type: Number, required: true },
    lastUpdate: { type: Date, required: true },
});
exports.GlobalCoronaInfoModel = mongoose_1.model('GlobalCoronaInfo', GlobalCoronaInfoSchema);
//# sourceMappingURL=globalCoronaInfo.js.map