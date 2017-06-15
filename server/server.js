import express from 'express';

const app = express();

require('dotenv').config();
require('./config/middleware')(express, app);
require('./config/routes')(app);

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
