import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import passport from 'passport';
import middleware from './config/middleware';
import routes from './config/routes';
import db from './db/index';

const app = express();

dotenv.config();
middleware(app, passport);
db();
routes(app);
passport(passport, db);

app.use(express.static(path.join(`${__dirname}/../build`)));
app.use(express.static(path.join(`${__dirname}/../public`)));

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
