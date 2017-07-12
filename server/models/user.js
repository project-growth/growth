const Bookshelf = require('../db/bookshelf');
const LocalLogin = require('./localLogin');
const Post = require('./post');

const User = Bookshelf.Model.extend({
  tableName: 'users',
  localLogins: () => this.hasOne(LocalLogin),
  posts: () => this.hasMany(Post),
});

module.exports = Bookshelf.model('User', User);
