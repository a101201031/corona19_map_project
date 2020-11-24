"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = require("express");
const global_1 = require("./coronaInfo/global");
exports.mainRouter = express_1.Router();
exports.mainRouter.get('/', (req, res) => {
    const message = 'developing!';
    res.send(message);
});
exports.mainRouter.use('/global-corona-info', global_1.globalRouter);
//# sourceMappingURL=index.js.map