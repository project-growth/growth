const { authRegister, authLogin, loginSuccess, loginFail, logout, isLoggedIn } = require('../controllers/user');
const { createPost, getPosts, viewPost } = require('../controllers/post');


module.exports = (router) => {
  router.route('/users/register')
    .get(loginFail)
    .post(authRegister);
  router.route('/users/login')
    .get(loginFail)
    .post(authLogin);
  router.route('/users/profile')
    .get(loginSuccess);
  router.route('/users/logout')
    .get(logout);
  router.route('/posts/create')
    .post(createPost);
  router.route('/posts/getAll')
    .get(getPosts);
  router.route('/posts/:id')
    .get(viewPost);
};
