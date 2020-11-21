"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = require("express");
const confirmedCase_1 = require("./confirmedCase");
exports.mainRouter = express_1.Router();
exports.mainRouter.get('/', (req, res) => {
    const message = 'developing!';
    res.send(message);
});
exports.mainRouter.use('/confirmed-case', confirmedCase_1.confirmedCaseRouter);
//# sourceMappingURL=index.js.map