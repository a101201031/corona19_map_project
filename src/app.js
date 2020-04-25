import express from 'express';
import * as bodyPaser from 'body-parser';
import * as ejs from 'ejs';
import { swaggerRouter } from './swaggerDoc';
import { mainRouter } from './router';

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

app.use('/', mainRouter);
app.use(swaggerRouter); // API Docs
//app.get("/", (req, res) => res.send("hello World"));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
