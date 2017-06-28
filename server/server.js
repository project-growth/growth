import express from 'express';
import { resolve, join } from 'path';
import dotenv from 'dotenv';
import passport from 'passport';
import middleware from './config/middleware';
import routes from './config/routes';
import auth from './config/passport';

dotenv.config();
const app = express();

middleware(app, passport);
routes(app, passport);
auth(passport);

app.use(express.static(join(`${__dirname}/../build`)));
app.use(express.static(join(`${__dirname}/../public`)));

app.get('/*', (request, response) => {
  response.sendFile(resolve(`${__dirname}/../public`, 'index.html'));
});

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
