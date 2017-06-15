// import { login } from '../controllers/auth';

module.exports = (app) => {
  app.post('/login', (req, res) => {
    res.send('login');
  });
};
