"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiRouter = void 0;

var _express = require("express");

var _path = require("path");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const apiRouter = (0, _express.Router)();
exports.apiRouter = apiRouter;
apiRouter.get('/getCoronaInfo', (req, res) => {
  const dataDir = (0, _path.join)(__dirname, '../../../coronaData');

  _fs.default.readdir(dataDir, 'utf8', (err, files) => {
    if (err) {
      res.status();
      throw err;
    }

    console.log(files);
    console.log(dataDir);

    _fs.default.readFileSync(__dirname, dataDir, files[-1]);
  });
});