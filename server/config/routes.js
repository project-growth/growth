const { authRegister, authLogin, loginSuccess, loginFail, logout, isLoggedIn } = require('../controllers/user');
const { createPost, getPosts, viewPost } = require('../controllers/post');


module.exports = (app) => {
  app.route('/users/register')
    .get(loginFail)
    .post(authRegister);
  app.route('/users/login')
    .get(loginFail)
    .post(authLogin);
  app.route('/users/profile')
    .get(loginSuccess);
  app.route('/users/logout')
    .get(logout);
  app.route('/posts/create')
    .post(createPost);
  app.route('/posts/getAll')
    .get(getPosts);
  app.route('/posts/:id')
    .get(viewPost);
};
