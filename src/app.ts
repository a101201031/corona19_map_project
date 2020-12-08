import * as bodyPaser from 'body-parser';
import express from 'express';
import { schedule } from 'node-cron';
import { DataMgmt } from './dataMgmt';
import dbConnect from './dbConnect';
import { mainRouter } from './router';
import { config } from 'dotenv';

config();
const app = express();
const port = process.env.EXPRESS_APP_SERVICE_PORT;

app.use(bodyPaser.json());
app.use(
  bodyPaser.urlencoded({
    extended: false,
  })
);

app.set('views', __dirname + '/public/views');

app.use('/', mainRouter);
app.use((req, res) => {
  res.status(400).send('Bad Request');
});

dbConnect();

const dataMgmt = new DataMgmt();
schedule('0 */3 * * *', () => {
  dataMgmt.sync();
});

app.listen(port, () => console.log(`APP listening at http://localhost:${port}`));
