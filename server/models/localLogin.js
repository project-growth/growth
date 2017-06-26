import Bookshelf from '../db/bookshelf';
import User from './user';

const Local = Bookshelf.Model.extend({
  tableName: 'local_logins',
  users: () => this.belongsTo(User),
});

export default Bookshelf.model('Local', Local);
