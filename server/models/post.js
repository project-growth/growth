import Bookshelf from '../db/bookshelf';
import User from './user';

const Post = Bookshelf.Model.extend({
  tableName: 'post',
  users: () => this.belongsTo(User),
});

export default Bookshelf.model('Post', Post);
