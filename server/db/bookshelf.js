import knex from 'knex';
import Bookshelf from 'bookshelf';
import dotenv from 'dotenv';
import knexfile from './knexfile';

dotenv.config();

const bookshelf = Bookshelf((knex)(knexfile[process.env.NODE_ENV || 'development']));

bookshelf.plugin('registry');

export default bookshelf;
