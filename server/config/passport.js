import { hashSync, genSaltSync, compareSync } from 'bcrypt';
import passportLocal from 'passport-local';
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
    new Local({ user_id: id })
      .fetch()
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
          .then(() => {
            const modelJSON = model.toJSON();
            return done(null, modelJSON);
          })
          .catch((err) => { done(null, err); });
        })
        .catch((err) => { done(null, err); });
        return undefined;
      })
      .catch((err) => { done(null, err); });
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
      .then((local) => {
        if (!local) {
          return done(null, false, { message: 'No user found.' });
        }
        const localJSON = local.toJSON();
        if (compareSync(password, localJSON.password)) {
          const userId = localJSON.user_id;
          new User({ id: userId })
            .fetch()
            .then((user) => {
              const userJSON = user.toJSON();
              return done(null, userJSON);
            })
            .catch(err => done(err));
        }
        return undefined;
      })
      .catch(err => done(err));
  }));
};
