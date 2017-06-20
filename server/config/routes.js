import { login, logout, register } from '../controllers/user';


export default (app) => {
  app.post('/api/users/login', login);
  app.post('/api/users/register', register);
  app.get('/api/users/logout', logout);
};
