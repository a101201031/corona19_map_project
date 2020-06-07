import { Router, request, response } from 'express';
import { apiRouter } from './api';
import { pageRouter } from './page';

export const mainRouter = Router();

mainRouter.use('/api', apiRouter);

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
});
// mainRouter.use('/', pageRouter);
