import express from 'express';
import * as bodyPaser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyPaser.json());
app.use(
  bodyPaser.urlencoded({
    extended: false,
  })
);

app.set('views', __dirname + '/public/views');

// app.use(swaggerRouter);

app.use((req, res) => {
  res.status(400).send('Bad Request');
});

app.listen(port, () => console.log(`APP listening at http://localhost:${port}`));
