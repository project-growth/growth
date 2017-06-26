
exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('users', (table) => {
    table.increments('id').unsigned().primary();
    table.string('email').notNullable();
    table.string('first_name').nullable();
    table.string('last_name').nullable();
    table.string('profile_pic').nullable();
    table.timestamp('created_at').notNullable();
  }),
  knex.schema.createTable('local_logins', (table) => {
    table.increments('id').unsigned().primary();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('users.id');
  }),
  knex.schema.createTable('posts', (table) => {
    table.increments('id').unsigned().primary();
    table.string('title').notNullable();
    table.string('body').nullable();
    table.integer('author_id').unsigned().notNullable();
    table.foreign('author_id').references('users.id');
    table.timestamp('created_at').notNullable();
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTableIfExists('users'),
  knex.schema.dropTableIfExists('local_logins'),
  knex.schema.dropTableIfExists('posts'),
]);
