/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("cities").delete();
  await knex("cities").insert([
    {
      id: 1,
      city_name: "Toronto",
      events: JSON.stringify([]),
      venues: JSON.stringify([]),
    },
    {
      id: 2,
      city_name: "Vancouver",
      events: JSON.stringify([]),
      venues: JSON.stringify([]),
    },
    {
      id: 3,
      city_name: "Montreal",
      events: JSON.stringify([]),
      venues: JSON.stringify([]),
    },
  ]);
}

/* COPY ME
 {
      id: ,
      city_name: "",
      events: JSON.stringify([]),
      venues: JSON.stringify([]),
  },
*/
