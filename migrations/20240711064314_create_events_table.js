export function up(knex) {
  return knex.schema.createTable("events", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("city").notNullable();
    table.string("month").notNullable();
    table.string("day").notNullable();
    table.string("main_image").notNullable();
    table.string("description").notNullable();
    table.string("venue").notNullable();
    table.string("venue_address").notNullable();
    table.string("doors_time");
    table.string("start_time");
    table.string("end_time");
    table.string("producer").notNullable();
    table.JSON("ticket_prices").notNullable();
    table.JSON("performers").notNullable();
    table.JSON("buy_tickets");
  });
}

export function down(knex) {
  return knex.schema.dropTable("events");
}
