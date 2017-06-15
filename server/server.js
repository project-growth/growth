import express from 'express';
import path from 'path';
// import middleware from './config/middleware';
// import routes from './config/routes';
const app = express();

require('dotenv').config();
require('./config/middleware')(express, app);
require('./config/routes')(app);

app.use(express.static(path.join(`${__dirname}/../build`)));
app.use(express.static(path.join(`${__dirname}/../public`)));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(`${__dirname}/../public`, 'index.html'));
});

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
