/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      name: "Velvet Vixen",
      email: "vv@fake-email.com",
      password: "vv",
      home_city: "Toronto",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/avatar-placeholder.png",
      cover_photo:
        "https://reveal-images.s3.us-east-2.amazonaws.com/velvetvixen-1.jpg",
      bio: "Velvet Vixen, known for her sultry and mesmerizing performances, combines classic burlesque with a modern twist. Her shows are a perfect blend of glamour and tease, making her a favorite on the burlesque circuit. With a background in ballet, she brings grace and precision to her every move.",
      events: JSON.stringify([1, 2, 3]),
    },
    {
      id: 2,
      name: "Mister Midnight",
      email: "mm@fake-email.com",
      password: "mm",
      home_city: "Toronto",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/avatar-placeholder.png",
      cover_photo:
        "https://reveal-images.s3.us-east-2.amazonaws.com/image-placeholder.png",
      bio: "Mister Midnight captivates audiences with his dark, mysterious, and often comedic performances. As a boylesque performer, he challenges traditional gender norms, combining elegance with a rugged charm. His routines often feature elaborate costumes and a touch of gothic flair.",
    },
    {
      id: 3,
      name: "Jasper Jinx",
      email: "jj@fake-email.com",
      password: "jj",
      home_city: "Toronto",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/avatar-placeholder.png",
      cover_photo:
        "https://reveal-images.s3.us-east-2.amazonaws.com/image-placeholder.png",
      bio: "Jasper Jinx is a boylesque performer known for his playful and energetic style. He incorporates elements of acrobatics and comedy into his acts, making every performance a dynamic and unforgettable experience. Jasper's infectious energy and charisma make him a standout on any stage.",
    },
    {
      id: 4,
      name: "Scarlet Siren",
      email: "ss@fake-email.com",
      password: "ss",
      home_city: "Toronto",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/avatar-placeholder.png",
      cover_photo:
        "https://reveal-images.s3.us-east-2.amazonaws.com/image-placeholder.png",
      bio: "Scarlet Siren is renowned for her sensual and seductive burlesque routines. Her performances are a celebration of femininity and empowerment, often featuring lavish costumes and provocative themes. Scarlet's magnetic presence and sultry moves leave a lasting impression on her audience.",
    },
    {
      id: 5,
      name: "Pearl Noir",
      email: "pn@fake-email.com",
      password: "pn",
      home_city: "Toronto",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/avatar-placeholder.png",
      cover_photo:
        "https://reveal-images.s3.us-east-2.amazonaws.com/image-placeholder.png",
      bio: "Pearl Noir is a burlesque performer who exudes elegance and sophistication. Her performances are a tribute to the golden age of burlesque, featuring glamorous costumes and classic striptease routines. Pearl's timeless beauty and graceful movements make her a beloved figure in the burlesque community.",
    },
    {
      id: 6,
      name: "Duke DeLuxe",
      email: "dd@fake-email.com",
      password: "dd",
      home_city: "Toronto",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/avatar-placeholder.png",
      cover_photo:
        "https://reveal-images.s3.us-east-2.amazonaws.com/image-placeholder.png",
      bio: "Duke DeLuxe is a boylesque performer with a flair for the dramatic. His shows are a blend of theatricality and sensuality, often incorporating elaborate props and storylines. Duke's commanding stage presence and creative vision set him apart as a true showman.",
    },
    {
      id: 7,
      name: "Ivory Empress",
      email: "ie@fake-email.com",
      password: "ie",
      home_city: "Toronto",
      avatar:
        "https://reveal-images.s3.us-east-2.amazonaws.com/avatar-placeholder.png",
      cover_photo:
        "https://reveal-images.s3.us-east-2.amazonaws.com/image-placeholder.png",
      bio: "Ivory Empress is known for her ethereal and enchanting burlesque performances. Her routines often draw inspiration from fairy tales and fantasy, featuring whimsical costumes and magical themes. Ivory's delicate beauty and imaginative acts transport her audience to a world of enchantment.",
    },
  ]);
}
