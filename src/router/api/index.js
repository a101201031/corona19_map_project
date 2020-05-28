import { Router, request, response } from 'express';
import { join } from 'path';
import fs from 'fs';

export const apiRouter = Router();

const responseFormat = {
  message: '',
  data: {},
};

apiRouter.get('/getCoronaInfoText', (req, res) => {
  const dataDir = join(__dirname, '../../../coronaData');
  fs.readdir(dataDir, 'utf8', (err, files) => {
    if (err) {
      res.status(500).send('not found corona data.');
    }
    console.log(files);
    fs.readFile(join(dataDir, files[files.length - 1]), 'utf8', (err, file) => {
      res.status(200).send(file);
    });
  });
});

apiRouter.get('/getResidenceCoronaInfo', (req, res) => {
  const responseJson = responseFormat;
  if (!req.query || (req.query && !req.query.residence)) {
    res.status(400).json({ message: 'parameter error. check request parameter' });
  }
  const dataDir = join(__dirname, '../../../coronaData');
  fs.readdir(dataDir, 'utf8', (err, files) => {
    if (err) {
      res.status(500).json({ message: 'not found corona data.' });
    }
    console.log(files);
    fs.readFile(join(dataDir, files[files.length - 1]), 'utf8', (err, file) => {
      const allInfoJson = JSON.parse(file);
      // test...
      res.status(200).json({ message: req.query.residence });
    });
  });
});

apiRouter.get('/getCoronaInfoJson', (req, res) => {
  const coronaInfoJson = responseFormat;
  const dataDir = join(__dirname, '../../../coronaData');
  fs.readdir(dataDir, 'utf8', (err, files) => {
    if (err) {
      res.status(500).json({ message: 'not found corona data.' });
    }
    // console.log(files);
    fs.readFile(join(dataDir, files[files.length - 1]), 'utf8', (err, file) => {
      coronaInfoJson.data = JSON.parse(file);
      coronaInfoJson.message = 'success';
      // console.log(coronaInfoJson);
      res.status(200).json(coronaInfoJson);
    });
  });
});
