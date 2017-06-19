import { login, logout, register } from '../controllers/user';


export default (app, passport) => {
  app.get('/profile', (req, res) => {
    console.log(req.user);
    res.send('logged in');
  });
  app.post('/api/users/login', passport.authenticate('local-login'), login);
  app.post('/api/users/register', register);
  app.get('/api/users/logout', logout);
};
