export function up(knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    table.string("user_name").notNullable();
    table.timestamp("timestamp").defaultTo(knex.fn.now());
    table.string("content").notNullable();
    table.integer("likes");
    table.JSON("hashtags");
    table.JSON("comments").defaultTo([]);
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export function down(knex) {
  return knex.schema.dropTable("posts");
}
