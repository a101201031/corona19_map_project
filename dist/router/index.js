"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = require("express");
exports.mainRouter = express_1.Router();
exports.mainRouter.get('/', (req, res) => {
    const message = 'developing!';
    res.send(message);
});
//# sourceMappingURL=index.js.map