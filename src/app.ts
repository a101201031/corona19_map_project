import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import { schedule } from 'node-cron';
import { DataMgmt } from './dataMgmt';
import dbConnect from './dbConnect';
import { mainRouter } from './router';

config();
const app = express();
const port = process.env.EXPRESS_APP_SERVICE_PORT;

app.use(json());
app.use(
  urlencoded({
    extended: false,
  })
);

app.use(cors());
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
