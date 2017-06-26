import knex from 'knex';
import Bookshelf from 'bookshelf';
import dotenv from 'dotenv';
import knexfile from './knexfile';

dotenv.config();

const bookshelf = Bookshelf((knex)(knexfile[process.env.NODE_ENV]));

bookshelf.plugin('registry');

module.exports = bookshelf;
