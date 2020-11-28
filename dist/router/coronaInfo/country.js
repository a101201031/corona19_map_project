"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryRouter = void 0;
const express_1 = require("express");
const countryCoronaInfo_1 = require("../../model/countryCoronaInfo");
exports.countryRouter = express_1.Router();
exports.countryRouter.get('/', async (req, res) => {
    const { body } = req;
    const resData = {
        message: '',
    };
    try {
        if (body.CountryCode) {
            const data = await countryCoronaInfo_1.CountryCoronaInfoModel.findOne({
                CountryCode: body.CountryCode,
            });
            resData.data = data;
            console.log(resData.data);
            resData.message = resData.data ? 'success.' : 'not found country.';
        }
        else {
            const data = await countryCoronaInfo_1.CountryCoronaInfoModel.find();
            resData.data = data;
            resData.message = 'success.';
        }
        res.status(200).json(resData);
    }
    catch (err) {
        res.status(500).json({ message: 'SERVER ERROR.' });
    }
});
//# sourceMappingURL=country.js.map