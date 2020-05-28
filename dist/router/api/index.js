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
const responseFormat = {
  message: '',
  data: {}
};
apiRouter.get('/getCoronaInfoText', (req, res) => {
  const dataDir = (0, _path.join)(__dirname, '../../../coronaData');

  _fs.default.readdir(dataDir, 'utf8', (err, files) => {
    if (err) {
      res.status(500).send('not found corona data.');
    }

    console.log(files);

    _fs.default.readFile((0, _path.join)(dataDir, files[files.length - 1]), 'utf8', (err, file) => {
      res.status(200).send(file);
    });
  });
});
apiRouter.get('/getResidenceCoronaInfo', (req, res) => {
  const responseJson = responseFormat;

  if (!req.query || req.query && !req.query.residence) {
    res.status(400).json({
      message: 'parameter error. check request parameter'
    });
  }

  const dataDir = (0, _path.join)(__dirname, '../../../coronaData');

  _fs.default.readdir(dataDir, 'utf8', (err, files) => {
    if (err) {
      res.status(500).json({
        message: 'not found corona data.'
      });
    }

    console.log(files);

    _fs.default.readFile((0, _path.join)(dataDir, files[files.length - 1]), 'utf8', (err, file) => {
      let allInfoJson = JSON.parse(file);
      res.status(200).json({
        message: req.query.residence
      });
    });
  });
});
apiRouter.get('/getCoronaInfoJson', (req, res) => {
  const coronaInfoJson = responseFormat;
  const dataDir = (0, _path.join)(__dirname, '../../../coronaData');

  _fs.default.readdir(dataDir, 'utf8', (err, files) => {
    if (err) {
      res.status(500).json({
        message: 'not found corona data.'
      });
    } // console.log(files);


    _fs.default.readFile((0, _path.join)(dataDir, files[files.length - 1]), 'utf8', (err, file) => {
      coronaInfoJson.data = JSON.parse(file);
      coronaInfoJson.message = 'success'; // console.log(coronaInfoJson);

      res.status(200).json(coronaInfoJson);
    });
  });
});