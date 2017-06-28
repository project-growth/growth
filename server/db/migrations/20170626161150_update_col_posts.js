
exports.up = knex => knex.schema.table('posts', (table) => {
  table.integer('price').notNull().defaultTo(0);
  table.int('latitude').Nullable();
  table.int('longitude').Nullable();
});

exports.down = knex => knex.schema.table('posts', (table) => {
  table.dropColumn('price');
  table.dropColumn('latitude');
  table.dropColumn('longitude');
});
