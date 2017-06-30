
exports.up = knex => knex.schema.table('posts', (table) => {
  table.integer('price').notNull().defaultTo(0);
  table.string('address').nullable();
});

exports.down = knex => knex.schema.table('posts', (table) => {
  table.dropColumn('price');
  table.dropColumn('address');
});
