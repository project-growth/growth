import { hashSync, genSaltSync, compareSync } from 'bcrypt';
import passportLocal from 'passport-local';
import bookshelf from '../db/bookshelf';
import User from '../models/user';
import Local from '../models/localLogin';
// import passportLinkedin from 'passport-linkedin';

const LocalStrategy = passportLocal.Strategy;
// const LinkedInStrategy = passportLinkedin.Strategy;

export default (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    bookshelf.select().from('local_login').where('user_id', id)
      .then((user) => { done(null, user); })
      .catch((err) => { console.error(err); });
  });
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    process.nextTick(() => {
      new Local({ email })
      .fetch()
      .then((user) => {
        if (user) {
          return done('email already exists', null);
        }
        const hashedPassword = hashSync(password, genSaltSync(8), null);
        new User({ email })
        .save()
        .then((model) => {
          const userId = model.get('id');
          new Local({ email, password: hashedPassword, user_id: userId })
          .save()
          .then((insert) => {
            console.log(insert.get('id'), insert.get('email'));
          })
          .catch((err) => { console.error(err); });
        })
        .catch((err) => { console.error(err); });
        return undefined;
      })
      .catch((err) => { console.error(err); });
    });
  }));
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    new Local({ email })
      .fetch()
      .then((user) => {
        if (!user) {
          return done(null, false, { message: 'No user found.' });
        }
        const userJSON = user.toJSON();
        if (compareSync(password, userJSON.password)) {
          return done(null, { ...userJSON });
        }
        return done(null, { ...userJSON });
      })
      .catch(err => done(err));
  }));
};
