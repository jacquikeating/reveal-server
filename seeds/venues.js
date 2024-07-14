/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("venues").delete();
  await knex("venues").insert([
    {
      id: 1,
      venue_name: "The Painted Lady",
      venue_address: "218 Ossington Avenue",
      city_id: 1,
      events: JSON.stringify([1, 2]),
    },
    {
      id: 2,
      venue_name: "Sweet Action Theatre",
      venue_address: "180 Shaw Street",
      city_id: 1,
      events: JSON.stringify([3]),
    },
    {
      id: 3,
      venue_name: "MY HOUSE",
      venue_address: "2882 Dundas Street West",
      city_id: 1,
      events: JSON.stringify([4]),
    },
    {
      id: 4,
      venue_name: "Super Wonder Gallery",
      venue_address: "1162 Bloor Street West",
      city_id: 1,
      events: JSON.stringify([5]),
    },
    {
      id: 5,
      venue_name: "TacoTaco",
      venue_address: "319 Augusta Avenue",
      city_id: 1,
      events: JSON.stringify([6]),
    },
    {
      id: 6,
      venue_name: "The Assembly Theatre",
      venue_address: "1479 Queen Street W",
      city_id: 1,
      events: JSON.stringify([7]),
    },
    {
      id: 7,
      venue_name: "Lee's Palace",
      venue_address: "529 Bloor Street W",
      city_id: 1,
      events: JSON.stringify([8]),
    },
    {
      id: 8,
      venue_name: "Junction [City] Underground",
      venue_address: "2907 Dundas Street W",
      city_id: 1,
      events: JSON.stringify([9]),
    },
  ]);
}

/* COPY ME
 {
      id: ,
      venue_name: "",
      venue_address: "",
      city_id: 1,
      events: JSON.stringify([]),
  },
*/
