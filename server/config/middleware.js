import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

export default (express, app) => {
  app.configure(() => {
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(app.router);
  });
};
