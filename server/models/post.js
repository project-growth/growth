import bookshelf from '../db/bookshelf';
import User from './user';

const Post = bookshelf.Model.extend({
  tableName: 'post',
  users: () => this.belongsTo(User),
});

export default bookshelf.model('Post', Post);
