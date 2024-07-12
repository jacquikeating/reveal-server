export function up(knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id").primary();
    table.string("user_id").notNullable();
    table.string("user_name").notNullable();
    table.string("timestamp").notNullable();
    table.string("content").notNullable();
    table.string("likes");
    table.JSON("hashtags");
    table.JSON("comments");
  });
}

export function down(knex) {
  return knex.schema.dropTable("posts");
}
