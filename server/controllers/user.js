import passport from 'passport';

export const login = passport.authenticate('local-login', {
  successRedirect: '/#/profile',
  failureRedirect: '/login',
  failureFlash: true,
});

export const logout = (req, res) => {
  req.logout();
  return res.json({ success: true });
};

export const register = passport.authenticate('local-signup', {
  successRedirect: '/#/profile',
  failureRedirect: '/register',
  failureFlash: true,
});
