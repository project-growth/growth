import { hashSync, genSaltSync, compareSync } from 'bcrypt';
import passportLocal from 'passport-local';
// import passportLinkedin from 'passport-linkedin';

const LocalStrategy = passportLocal.Strategy;
// const LinkedInStrategy = passportLinkedin.Strategy;

export default (passport, connection) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
    return undefined;
  });
  passport.deserializeUser((id, done) => {
    const queryStr = 'SELECT * FROM users WHERE id = ?';
    connection.query(queryStr, [id], (err, user) => {
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
    const queryStr = 'SELECT * FROM users WHERE email = ?';
    connection.query(queryStr, [email], (err, user) => {
      if (err) { return done(err); }
      if (user.length) {
        return done(null, false, { message: 'That email is already taken.' });
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
    const queryStr = 'SELECT * FROM users WHERE email = ?';
    connection.query(queryStr, [email], (err, user) => {
      if (err) { return done(err); }
      if (!user.length) {
        return done(null, false, { message: 'No user found.' });
      } else if (compareSync(password, user[0].password)) {
        const userObj = { ...user[0] };
        return done(null, userObj);
      }
      return done(null, false, { message: 'Incorrect password.' });
    });
  }));
//   passport.use(new LinkedInStrategy({
//     consumerKey: process.env.LINKEDIN_API_KEY,
//     consumerSecret: process.env.LINKEDIN_SECRET_KEY,
//     callbackURL: 'http://127.0.0.1:3000/api/auth/linkedin/callback',
//   },
//   (token, tokenSecret, profile, done) => {
//     const queryStr = '';
//     const params = [];
//     connection.query(queryStr, params, (err, user) => done(err, user));
//   },
// ));
};
