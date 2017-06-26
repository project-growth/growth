import { redirect, logout } from '../controllers/user';
import { createPost, getPosts } from '../controllers/post';

export default (app, passport) => {
  app.post('/api/users/login', passport.authenticate('local-login'), redirect);
  app.post('/api/users/register', passport.authenticate('local-signup'), redirect);
  app.get('/api/users/logout', logout);
  app.post('/api/posts/create', createPost);
  app.get('api/posts/getAll', getPosts);
};
