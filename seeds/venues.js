/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("venues").delete();
  await knex("venues").insert([
    {
      id: 1,
      name: "The Painted Lady",
      address: "218 Ossington Avenue",
      city_id: 1,
      events: JSON.stringify([1, 2]),
    },
    {
      id: 2,
      name: "Sweet Action Theatre",
      address: "180 Shaw Street",
      city_id: 1,
      events: JSON.stringify([3]),
    },
    {
      id: 3,
      name: "MY HOUSE",
      address: "2882 Dundas Street West",
      city_id: 1,
      events: JSON.stringify([4]),
    },
    {
      id: 4,
      name: "Super Wonder Gallery",
      address: "1162 Bloor Street West",
      city_id: 1,
      events: JSON.stringify([5]),
    },
    {
      id: 5,
      name: "TacoTaco",
      address: "319 Augusta Avenue",
      city_id: 1,
      events: JSON.stringify([6]),
    },
    {
      id: 6,
      name: "The Assembly Theatre",
      address: "1479 Queen Street W",
      city_id: 1,
      events: JSON.stringify([7]),
    },
    {
      id: 7,
      name: "Lee's Palace",
      address: "529 Bloor Street W",
      city_id: 1,
      events: JSON.stringify([8]),
    },
    {
      id: 8,
      name: "Junction [City] Underground",
      address: "2907 Dundas Street W",
      city_id: 1,
      events: JSON.stringify([9]),
    },
  ]);
}
