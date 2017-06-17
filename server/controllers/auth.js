import passport from 'passport';
import connection from '../db/index';

export const login = (req, res, next) => {
  passport.authenticate('local-login', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { return res.json({ success: false, message: info.message }); }
    req.logIn(user, (errLogin) => {
      if (errLogin) { return res.json({ success: false, message: errLogin }); }
      return res.json({ success: true, message: 'success' });
    });
    return undefined;
  })(req, res, next);
};

export const logout = (req, res) => {
  req.logout();
  return res.json({ success: true });
};

export const register = (req, res) => {
  const queryFind = `SELECT * from 'users' WHERE 'email' = '${req.body.email}'`;
  connection.query(queryFind, (err, user) => {
    if (user) {
      res.json({ success: false, message: 'Email already in use' });
      return undefined;
    }
    const queryInsert = 'INSERT INTO \'users\' (email, password) values (?, ?)';
    const params = [req.body.email, req.body.password];
    connection.query(queryInsert, params, (signupErr) => {
      if (signupErr) {
        res.json({ success: false });
        return undefined;
      }
      res.json({ sucess: true });
      return undefined;
    });
    return undefined;
  });
};
