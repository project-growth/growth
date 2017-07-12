const passport = require('passport');

module.exports = {
  authRegister: passport.authenticate('local-signup', {
    successRedirect: '/api/users/profile',
    failureRedirect: '/api/users/register',
    failureFlash: true,
  }),

  authLogin: passport.authenticate('local-login', {
    successRedirect: '/api/users/profile',
    failureRedirect: '/api/users/login',
    failureFlash: true,
  }),

  loginSuccess(req, res) {
    res.send(req.user);
  },

  loginFail(req, res) {
    res.send({ message: req.flash('error') });
  },

  logout(req, res) {
    req.logout();
    return res.json({ success: true });
  },

  isLoggedIn(req, res, next) {
    if (req.user) {
      next();
    } else {
      res.redirect('/api/users/login');
    }
  },
};
