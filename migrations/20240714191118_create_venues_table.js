export function up(knex) {
  return knex.schema.createTable("venues", (table) => {
    table.increments("id").primary();
    table.string("venue_name").notNullable();
    table.string("venue_address").notNullable();
    table.integer("city_id").unsigned().notNullable();
    table.JSON("events").defaultTo({});
    table.JSON("posts").defaultTo({});
    table
      .foreign("city_id")
      .references("id")
      .inTable("cities")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export function down(knex) {
  return knex.schema.dropTable("venues");
}
