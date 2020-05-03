import { Router, request, response } from 'express';
// import { join } from 'path';
// import fs from 'fs'; // 원래는 fs로 html 파일 읽으려고 했으나..
export const pageRouter = Router();

// console.log(join(__dirname, '../../public/index.html'));
pageRouter.get('/', (req, res) => {
  res.render('index.html');
});
