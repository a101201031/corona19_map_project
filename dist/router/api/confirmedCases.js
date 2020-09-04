"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmedCasesRouter = void 0;

var _express = require("express");

var _path = require("path");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const confirmedCasesRouter = (0, _express.Router)();
exports.confirmedCasesRouter = confirmedCasesRouter;
const responseFormat = {
  message: '',
  data: {}
};

function objectToArray(obj) {
  return Object.keys(obj).map(key => {
    return [key, obj[key]];
  });
}

confirmedCasesRouter.get('/', (req, res) => {
  const coronaInfoJson = responseFormat;
  const dataDir = (0, _path.join)(__dirname, '../../../coronaData');

  _fs.default.readdir(dataDir, 'utf8', (err, files) => {
    if (err) {
      return res.status(500).json({
        message: 'not found corona data.'
      });
    }

    _fs.default.readFile((0, _path.join)(dataDir, files[files.length - 1]), 'utf8', (err, file) => {
      coronaInfoJson.data = JSON.parse(file);
      const coronaInfoArray = objectToArray(coronaInfoJson.data);
      const residenceCountJson = {};
      coronaInfoArray.forEach((cur, index) => {
        const residence = cur[1].residence;

        if (!residenceCountJson[residence]) {
          residenceCountJson[residence] = 1;
        } else {
          residenceCountJson[residence] += 1;
        }
      });
      coronaInfoJson.message = 'success';
      coronaInfoJson.data.residenceCount = residenceCountJson;
      res.status(200).json(coronaInfoJson);
    });
  });
});
confirmedCasesRouter.get('/residence/:residence', (req, res) => {
  const allInfoJson = responseFormat;
  console.log(req.params.residence);
  const dataDir = (0, _path.join)(__dirname, '../../../coronaData');

  _fs.default.readdir(dataDir, 'utf8', (err, files) => {
    if (err) {
      return res.status(500).json({
        message: 'not found corona data.'
      });
    }

    _fs.default.readFile((0, _path.join)(dataDir, files[files.length - 1]), 'utf8', (err, file) => {
      allInfoJson.data = JSON.parse(file);
      const findData = objectToArray(allInfoJson.data);
      const resultData = findData.filter(item => {
        if (item[1].residence === req.params.residence) {
          return true;
        } else {
          return false;
        }
      });
      res.status(200).json({
        message: 'success',
        data: resultData
      });
    });
  });
});