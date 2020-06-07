"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiRouter = void 0;

var _express = require("express");

var _responseCoronaData = require("./responseCoronaData");

const apiRouter = (0, _express.Router)();
exports.apiRouter = apiRouter;
apiRouter.use('/responseCsoronaData', _responseCoronaData.coronaDataRouter);