"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalRouter = void 0;
const express_1 = require("express");
const globalCoronaInfo_1 = require("../../dataSrc/globalCoronaInfo");
const globalCoronaInfo_2 = require("../../model/globalCoronaInfo");
exports.globalRouter = express_1.Router();
exports.globalRouter.get('/', async (req, res) => {
    try {
        const resData = await globalCoronaInfo_2.GlobalCoronaInfoModel.find();
        res.status(200).json(resData);
    }
    catch (err) {
        res.status(500).json({ message: 'SERVER ERROR.' });
    }
});
exports.globalRouter.post('/refresh', async (req, res) => {
    try {
        const srcData = await globalCoronaInfo_1.srcGlobalInfo();
        globalCoronaInfo_2.GlobalCoronaInfoModel.create(srcData);
        res.status(200).json({ message: 'request success' });
    }
    catch (err) {
        res.status(500).json({ message: 'SERVER ERROR' });
    }
});
//# sourceMappingURL=global.js.map