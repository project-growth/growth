import { login } from '../controllers/auth';

export default (app) => {
  app.post('/login', login);
};
