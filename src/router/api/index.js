import { Router, request, response } from 'express';
import { join } from 'path';
import fs from 'fs';

export const apiRouter = Router();

apiRouter.get('/getCoronaInfo', (req, res) => {
  const dataDir = join(__dirname, '../../../coronaData');
  fs.readdir(dataDir, 'utf8', (err, files) => {
    if (err) {
      res.status(500).send('not found corona data.');
      throw err;
    }
    console.log(files);
    console.log(dataDir);
    fs.readFileSync(dataDir + files[-1], 'utf8', (err, file) => {});
  });
});
