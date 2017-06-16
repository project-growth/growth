import bodyParser from 'body-parser';
import cors from 'cors';

export default (express, app) => {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};
