"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageRouter = void 0;

var _express = require("express");

var _path = require("path");

// import fs from 'fs'; // 원래는 fs로 html 파일 읽으려고 했으나..
const pageRouter = (0, _express.Router)();
exports.pageRouter = pageRouter;
console.log((0, _path.join)(__dirname, '../../public/index.html'));
pageRouter.get('/', (req, res) => {
  res.render('index.html');
});