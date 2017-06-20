import { hashSync, genSaltSync, compareSync } from 'bcrypt';
import pl from 'passport-local';

const LocalStrategy = pl.Strategy;

export default (passport, connection) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    const queryStr = `SELECT * FROM users WHERE id = '${id}'`;
    connection.query(queryStr, (err, user) => {
      done(err, user[0]);
      return undefined;
    });
  });
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    const queryStr = `SELECT * FROM users WHERE email = '${email}'`;
    connection.query(queryStr, (err, user) => {
      if (err) { return done(err); }
      if (user.length) {
        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
      }
      const hashedPassword = hashSync(password, genSaltSync(8), null);
      const newUserMySql = { email, password: hashedPassword };
      const queryStr2 = 'INSERT INTO users (email, password) values (?, ?)';
      const params = [newUserMySql.email, newUserMySql.password];
      connection.query(queryStr2, params, (error, rows) => {
        if (error) { return done(error); }
        newUserMySql.id = rows.insertId;
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
    const queryStr = `SELECT * FROM users WHERE email = '${email}'`;
    connection.query(queryStr, (err, user) => {
      if (err) { return done(err); }
      console.log('local-login', user);
      const compared = compareSync(password, user[0].password);
      if (!user.length) {
        return done(null, false, req.flash('loginMessage', 'No user found.'));
      } else if (compared) {
        return done(null, user[0]);
      }
      return done(null, false, req.flash('loginMessage', 'Incorrect password.'));
    });
  }));
};
