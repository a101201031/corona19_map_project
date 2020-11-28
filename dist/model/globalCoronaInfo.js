"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalCoronaInfoModel = void 0;
const mongoose_1 = require("mongoose");
const GlobalCoronaInfoSchema = new mongoose_1.Schema({
    NewConfirmed: { type: Number, required: true },
    TotalConfrmed: { type: Number, required: true },
    NewDeaths: { type: Number, required: true },
    TotalDeaths: { type: Number, required: true },
    NewRecovered: { type: Number, required: true },
    TotalRecovered: { type: Number, required: true },
    LastUpdate: { type: Date, required: true },
});
exports.GlobalCoronaInfoModel = mongoose_1.model('GlobalCoronaInfo', GlobalCoronaInfoSchema);
//# sourceMappingURL=globalCoronaInfo.js.map