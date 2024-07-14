export function up(knex) {
  return knex.schema.createTable("cities", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.JSON("events").defaultTo({});
    table.JSON("venues").defaultTo({});
  });
}

export function down(knex) {
  return knex.schema.dropTable("cities");
}
