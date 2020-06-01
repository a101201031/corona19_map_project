"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiRouter = void 0;

var _express = require("express");

var _coronaData = require("./coronaData");

const apiRouter = (0, _express.Router)();
exports.apiRouter = apiRouter;
apiRouter.use('/coronaData', _coronaData.coronaDataRouter);