import express from 'express';
import * as bodyPaser from 'body-parser';
import * as ejs from 'ejs';
import { join } from 'path';

import { swaggerRouter } from './swaggerDoc';
import { mainRouter } from './router';

import dbConnect from './dbConnect';
import { CoronaInfo } from './getCoronaInfo';

const coronaInfo = new CoronaInfo();
setTimeout(() => {
  console.log(coronaInfo.info);
  setTimeout(() => {
    coronaInfo.save();
  }, 2000);
}, 8000);

const app = express();
const port = 3000;

app.use(bodyPaser.json());
app.use(
  bodyPaser.urlencoded({
    extended: false,
  })
);

app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.use(express.static(join(__dirname, '/public')));

app.use('/', mainRouter);

app.use(swaggerRouter); // API Docs

app.use((req, res) => {
  res.status(400).send('Bad Request');
});

dbConnect();

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
