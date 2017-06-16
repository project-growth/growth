// import { login } from '../controllers/auth';

export default (app) => {
  app.get('/login', (req, res) => {
    res.send('login');
  });
};
