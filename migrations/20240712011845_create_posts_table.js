export function up(knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    table.string("user_name");
    table
      .string("avatar")
      .defaultTo(
        "https://reveal-images.s3.us-east-2.amazonaws.com/avatar-placeholder.png"
      );
    table.timestamp("timestamp").defaultTo(knex.fn.now());
    table.string("content").notNullable();
    table.integer("likes").defaultTo(0);
    table.JSON("hashtags").defaultTo({});
    table.JSON("comments").defaultTo({});
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
