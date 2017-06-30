import Bookshelf from '../db/bookshelf';
import LocalLogin from './localLogin';
import Post from './post';

const User = Bookshelf.Model.extend({
  tableName: 'users',
  localLogins: () => this.hasOne(LocalLogin),
  posts: () => this.hasMany(Post),
});

export default Bookshelf.model('User', User);
