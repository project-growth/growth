import knex from 'knex';
import bookshelf from 'bookshelf';
import knexfile from './knexfile';

const Bookshelf = bookshelf(knex)(knexfile.development);

Bookshelf.plugin('registry');

export default Bookshelf;
