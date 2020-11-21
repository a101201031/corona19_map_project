"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmedCaseRouter = void 0;
const express_1 = require("express");
const confirmedCase_1 = require("../model/confirmedCase");
exports.confirmedCaseRouter = express_1.Router();
exports.confirmedCaseRouter.post('/', (req, res) => {
    confirmedCase_1.confirmedCasesModel.create(req.body);
    res.status(200).json({
        message: 'success',
    });
});
exports.confirmedCaseRouter.get('/', async (req, res) => {
    const resultData = await confirmedCase_1.confirmedCasesModel.find();
    res.status(200).json({
        message: 'success',
        data: resultData,
    });
});
//# sourceMappingURL=confirmedCase.js.map