import pl from 'passport-local';

const LocalStrategy = pl.Strategy;

export default (passport, connection) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    const queryStr = `SELECT * FROM users WHERE id =${id}`;
    connection.query(queryStr, (err, rows) => {
      done(err, rows[0]);
      return undefined;
    });
  });
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    const queryStr = `SELECT * FROM 'users' WHERE email = '${email}'`;
    connection.query(queryStr, (err, rows) => {
      if (err) { return done(err); }
      if (rows.length) {
        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
      }
      const newUserMySql = { email, password };
      const queryStr2 = 'INSERT INTO \'users\' (email, passport) values (?, ?)';
      connection.query(queryStr2, (error, rows2) => {
        newUserMySql.id = rows2.insertId;
        return done(null, newUserMySql);
      });
      return undefined;
    });
  }));
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    const queryStr = `SELECT * FROM 'users' WHERE 'email' = '${email}'`;
    connection.query(queryStr, (err, rows) => {
      if (err) { return done(err); }
      if (!rows.length) {
        return done(null, false, req.flash('loginMessage', 'No user found.'));
      }
      return undefined;
    });
  }));
};
