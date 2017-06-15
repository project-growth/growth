import bodyParser from 'body-parser';
import cors from 'cors';

module.exports = (express, app) => {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};
