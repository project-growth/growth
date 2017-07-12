const express = require('express');
const { resolve, join } = require('path');
const { config } = require('dotenv');
const passport = require('passport');

config();
const app = express();

require('./config/middleware')(app, passport);
require('./config/routes')(app);
require('./config/passport')(passport);

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
