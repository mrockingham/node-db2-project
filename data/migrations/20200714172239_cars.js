
exports.up = function(knex) {
  return knex.schema.createTable('car-dealer', tbl =>{
      tbl.increments('id');
      tbl.string('VIN',128).unique().notNullable();
      tbl.string('make').notNullable();
      tbl.string('model').notNullable()
      tbl.integer('mileage').notNullable()
      tbl.string('transmission').nullable();
      tbl.string('title_status').nullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("car-dealer");
};
