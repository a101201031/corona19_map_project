"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainRouter = void 0;

var _express = require("express");

var _api = require("./api");

const mainRouter = (0, _express.Router)();
exports.mainRouter = mainRouter;
mainRouter.use('/api', _api.apiRouter);
mainRouter.get('/:url', function (req, res) {
  const url = req.params.url;
  res.render(url, (err, html) => {
    if (err) {
      console.log(err.view.name);
      res.status(404).send('NOT FOUND');
    }

    res.send(html);
  });
});
mainRouter.get('/', function (req, res) {
  res.render('index.html');
}); // mainRouter.use('/', pageRouter);