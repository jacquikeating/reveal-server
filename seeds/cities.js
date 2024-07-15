/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("cities").delete();
  await knex("cities").insert([
    {
      id: 1,
      name: "Toronto",
      events: JSON.stringify([]),
      venues: JSON.stringify([]),
    },
    {
      id: 2,
      name: "Vancouver",
      events: JSON.stringify([]),
      venues: JSON.stringify([]),
    },
    {
      id: 3,
      name: "Montreal",
      events: JSON.stringify([]),
      venues: JSON.stringify([]),
    },
  ]);
}
