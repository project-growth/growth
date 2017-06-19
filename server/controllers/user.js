import passport from 'passport';

export const login = (req, res) => {
  res.redirect('/profile', req.user);
};

export const logout = (req, res) => {
  req.logout();
  return res.json({ success: true });
};

export const register = passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/register',
  failureFlash: true,
});
