import { authRegister, authLogin, loginSuccess, loginFail, logout } from '../controllers/user';
import { createPost, getPosts, viewPost } from '../controllers/post';

export default (app) => {
  app.post('/api/users/register', authRegister);
  app.post('/api/users/login', authLogin);
  app.get('/api/users/profile', loginSuccess);
  app.get('/api/users/register', loginFail);
  app.get('/api/users/login', loginFail);
  app.get('/api/users/logout', logout);
  app.post('/api/posts/create', createPost);
  app.get('/api/posts/getAll', getPosts);
  app.get('/api/posts/:id', viewPost);
};
