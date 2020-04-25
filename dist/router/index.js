"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainRouter = void 0;

var _express = require("express");

var _api = require("./api");

var _page = require("./page");

const mainRouter = (0, _express.Router)();
exports.mainRouter = mainRouter;
mainRouter.use('/api', _api.apiRouter);
mainRouter.use('/', _page.pageRouter);