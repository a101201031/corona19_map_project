import { Router, request, response } from 'express';
import { join } from 'path';
import fs from 'fs';

export const confirmedCasesRouter = Router();

const responseFormat = {
  message: '',
  data: {},
};

function objectToArray(obj) {
  return Object.keys(obj).map((key) => {
    return [key, obj[key]];
  });
}

confirmedCasesRouter.get('/text', (req, res) => {
  const dataDir = join(__dirname, '../../../coronaData');
  fs.readdir(dataDir, 'utf8', (err, files) => {
    if (err) {
      return res.status(500).send('not found corona data.');
    }
    fs.readFile(join(dataDir, files[files.length - 1]), 'utf8', (err, file) => {
      res.status(200).send(file);
    });
  });
});

confirmedCasesRouter.get('/json', (req, res) => {
  const coronaInfoJson = responseFormat;
  const dataDir = join(__dirname, '../../../coronaData');
  fs.readdir(dataDir, 'utf8', (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'not found corona data.' });
    }
    fs.readFile(join(dataDir, files[files.length - 1]), 'utf8', (err, file) => {
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

confirmedCasesRouter.get('/json/:residence', (req, res) => {
  const allInfoJson = responseFormat;
  console.log(req.params.residence);
  const dataDir = join(__dirname, '../../../coronaData');
  fs.readdir(dataDir, 'utf8', (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'not found corona data.' });
    }
    fs.readFile(join(dataDir, files[files.length - 1]), 'utf8', (err, file) => {
      allInfoJson.data = JSON.parse(file);
      const findData = objectToArray(allInfoJson.data);
      const resultData = findData.filter((item) => {
        if (item[1].residence === req.params.residence) {
          return true;
        } else {
          return false;
        }
      });
      res.status(200).json({ message: 'success', data: resultData });
    });
  });
});
