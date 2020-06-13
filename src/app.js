import express from 'express';
import * as bodyPaser from 'body-parser';
import * as ejs from 'ejs';
import { swaggerRouter } from './swaggerDoc';
import { mainRouter } from './router';
import { join } from 'path';

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
// app.use((req, res) => {
//   res.status(400).send('Bad Request');
// });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
