import bookshelf from '../db/bookshelf';
import User from './user';

const Post = bookshelf.Model.extend({
  tableName: 'posts',
  users: () => this.belongsTo(User),
});

export default bookshelf.model('Post', Post);
