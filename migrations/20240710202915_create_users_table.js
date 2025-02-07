export function up(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("home_city");
    table.string("avatar");
    table.string("cover_photo");
    table.string("bio");
    table.JSON("events");
    table.JSON("gallery");
  });
}

export function down(knex) {
  return knex.schema.dropTable("users");
}
