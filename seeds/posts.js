/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("posts").delete();
  await knex("posts").insert([
    {
      user_id: 1,
      user_name: "Velvet Vixen",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/velvetvixen-2.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      likes: 18,
      timestamp: 1688218312385,
      hashtags: {
        city: "1",
      },
    },
    {
      user_id: 2,
      user_name: "Aurora Glitter",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/auroraglitter-main.jpg",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likes: 24,
      timestamp: 1688335712385,
      hashtags: {
        city: "3",
        event: "3",
        person: "2",
        venue: "3",
      },
    },
    {
      user_id: 3,
      user_name: "Jasper Jinx",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/jasperjinx-main.jpg",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      likes: 7,
      timestamp: 1688453112385,
      hashtags: {
        city: "2",
        venue: "5",
      },
    },
    {
      user_id: 4,
      user_name: "Scarlet Siren",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/scarletsiren-main.jpg",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      likes: 16,
      timestamp: 1688570512385,
      hashtags: {
        city: "1",
        event: "7",
      },
    },
    {
      user_id: 5,
      user_name: "Pearl Noir",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/pearlnoir-main.jpg",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      likes: 21,
      timestamp: 1688687912385,
      hashtags: {
        venue: "4",
      },
    },
    {
      user_id: 6,
      user_name: "Dandy D'Light",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/dandydlight-main.jpg",
      content: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
      likes: 9,
      timestamp: 1688805312385,
      hashtags: {},
    },
    {
      user_id: 7,
      user_name: "Ivory Empress",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/ivoryempress-main.jpg",
      content:
        "Ut convallis, lacus nec ornare volutpat, velit augue vehicula metus, at consequat magna elit eu eros.",
      likes: 14,
      timestamp: 1688922712385,
      hashtags: {
        city: "2",
        person: "1",
      },
    },
    {
      user_id: 8,
      user_name: "Sir Silhouette",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/sirsilhouette-main.jpg",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      likes: 28,
      timestamp: 1689040112385,
      hashtags: {
        venue: "8",
      },
    },
    {
      user_id: 9,
      user_name: "Gigi Oui-Oui",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/gigiouioui-main.jpg",
      content:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
      likes: 13,
      timestamp: 1689157512385,
      hashtags: {
        city: "1",
        person: "3",
      },
    },
    {
      user_id: 10,
      user_name: "Blaze Infierno",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/blazeinferno-main.jpg",
      content:
        "Mauris quam nibh, fermentum id, gravida sit amet, faucibus id, magna.",
      likes: 26,
      timestamp: 1689274912385,
      hashtags: {
        event: "4",
      },
    },
    {
      user_id: 11,
      user_name: "Lola Lush",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/lolalush-main.jpg",
      content:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
      likes: 15,
      timestamp: 1689392312385,
      hashtags: {
        city: "3",
        event: "5",
        person: "7",
        venue: "2",
      },
    },
    {
      user_id: 12,
      user_name: "Rocco Ravish",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/roccoravish-main.jpg",
      content: "Aenean commodo ligula eget dolor. Aenean massa.",
      likes: 22,
      timestamp: 1689509712385,
      hashtags: {
        person: "9",
      },
    },
    {
      user_id: 13,
      user_name: "Queerly Beloved",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/queerlybeloved-main.jpg",
      content:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      likes: 8,
      timestamp: 1689627112385,
      hashtags: {
        person: "12",
        event: "6",
      },
    },
    {
      user_id: 14,
      user_name: "Cherie Fatale",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/gigideluxe-main.jpg",
      content:
        "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      likes: 30,
      timestamp: 1689744512385,
      hashtags: {
        venue: "6",
      },
    },
    {
      user_id: 1,
      user_name: "Velvet Vixen",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/velvetvixen-2.jpg",
      content:
        "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
      likes: 11,
      timestamp: 1689861912385,
      hashtags: {
        city: "3",
      },
    },
    {
      user_id: 2,
      user_name: "Aurora Glitter",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/auroraglitter-main.jpg",
      content:
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
      likes: 20,
      timestamp: 1689979312385,
    },
    {
      user_id: 3,
      user_name: "Jasper Jinx",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/jasperjinx-main.jpg",
      content:
        "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
      likes: 17,
      timestamp: 1690096712385,
      hashtags: {
        event: "2",
        person: "4",
        venue: "5",
      },
    },
    {
      user_id: 4,
      user_name: "Scarlet Siren",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/scarletsiren-main.jpg",
      content:
        "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
      likes: 6,
      timestamp: 1690214112385,
      hashtags: {
        event: "1",
      },
    },
    {
      user_id: 5,
      user_name: "Pearl Noir",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/pearlnoir-main.jpg",
      content:
        "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
      likes: 19,
      timestamp: 1690331512385,
      hashtags: {
        city: "1",
        venue: "3",
      },
    },
    {
      user_id: 6,
      user_name: "Dandy D'Light",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/dandydlight-main.jpg",
      content:
        "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
      likes: 23,
      timestamp: 1690448912385,
      hashtags: {
        person: "12",
      },
    },
    {
      user_id: 7,
      user_name: "Ivory Empress",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/ivoryempress-main.jpg",
      content: "Phasellus viverra nulla ut metus varius laoreet.",
      likes: 10,
      timestamp: 1690566312385,
      comments: {},
      hashtags: { city: "3", event: "3", person: "2", venue: "3" },
    },
    {
      user_id: 8,
      user_name: "Sir Silhouette",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/sirsilhouette-main.jpg",
      content: "Quisque rutrum. Aenean imperdiet.",
      likes: 25,
      timestamp: 1690683712385,
      comments: {},
      hashtags: {},
    },
  ]);
}
