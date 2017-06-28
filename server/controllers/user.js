import passport from 'passport';

export const authRegister = passport.authenticate('local-signup', {
  successRedirect: '/api/users/profile',
  failureRedirect: '/api/users/register',
  failureFlash: true,
});

export const authLogin = passport.authenticate('local-login', {
  successRedirect: '/api/users/profile',
  failureRedirect: '/api/users/login',
  failureFlash: true,
});

export const loginSuccess = (req, res) => {
  res.send(req.user);
};

export const loginFail = (req, res) => {
  res.send({ message: req.flash('error') });
};

export const logout = (req, res) => {
  req.logout();
  return res.json({ success: true });
};
