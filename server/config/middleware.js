const { Router } = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const routes = require('./routes');

const router = Router();

module.exports = (app, passport) => {
  app.use(cors());
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(session({
    secret: 'growing',
    cookie: { maxAge: 525600 },
    resave: true,
    saveUninitialized: true,
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
  app.use('/api/', router);
};
