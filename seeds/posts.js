/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("posts").delete();
  await knex("posts").insert([
    {
      user_id: 1,
      user_name: "X",
      content: "Lorem ipsum",
      likes: 0,
      timestamp: knex.fn.now(),
    },
    {
      user_id: 2,
      user_name: "Y",
      content: "Iprem lorsum",
      likes: 0,
      timestamp: knex.fn.now(),
    },
  ]);
}

/* COPY ME
 {
    user_id: 1,
    user_name: "X",
    content: "Lorem ipsum",
    likes: 0,
  },
*/
