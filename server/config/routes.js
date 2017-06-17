import { resolve } from 'path';
import { login, logout, register } from '../controllers/auth';

export default (app) => {
  app.get('*', (request, response) => {
    response.sendFile(resolve(`${__dirname}/../public`, 'index.html'));
  });
  app.post('/login', login);
  app.get('/logout', logout);
  app.post('/register', register);
};
