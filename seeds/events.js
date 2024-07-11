/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("events").delete();
  await knex("events").insert([
    {
      id: 1,
      name: "Hello Good Bi!",
      city: "Toronto",
      month: "July",
      day: "19",
      main_image: "https://reveal-images.s3.us-east-2.amazonaws.com/e1.jpg",
      description:
        "Join us at the cabaret, ol' chum! Come celebrate the wonderful complexities of the bi/pan/omni experience with comedy, music, and burlesque. Produced and hosted by your Holy Sparkle duo: Miss Diamond and St. Stella. Two nights with TWO unique casts!",
      venue: "The Painted Lady",
      venue_address: "218 Ossington Avenue",
      doors_time: "7:00 PM",
      start_time: "7:30 PM",
      end_time: "10:30 PM",
      producer: "Holy Sparkles",
      ticket_prices: JSON.stringify({ advanceGA: 25, doorGA: 30 }),
      performers: JSON.stringify([2, 4, 1, 6, 5]),
      buy_tickets: "https://plainstage.com/events/HelloGoodBiJuly19",
    },
    {
      id: 2,
      name: "Hello Good Bi!",
      city: "Toronto",
      month: "July",
      day: "20",
      main_image: "https://reveal-images.s3.us-east-2.amazonaws.com/e1.jpg",
      description:
        "Join us at the cabaret, ol' chum! Come celebrate the wonderful complexities of the bi/pan/omni experience with comedy, music, and burlesque. Produced and hosted by your Holy Sparkle duo: Miss Diamond and St. Stella. Two nights with TWO unique casts!",
      venue: "The Painted Lady",
      venue_address: "218 Ossington Avenue",
      doors_time: "7:00 PM",
      start_time: "7:30 PM",
      producer: "Holy Sparkles",
      ticket_prices: JSON.stringify({ advanceGA: 25, doorGA: 30 }),
      performers: JSON.stringify([2, 4, 1, 6, 5]),
      buy_tickets: "https://plainstage.com/events/HelloGoodBiJuly20",
    },
    {
      id: 3,
      name: "Bad Cabaret",
      city: "Toronto",
      month: "July",
      day: "20",
      main_image: "https://reveal-images.s3.us-east-2.amazonaws.com/e3.jpg",
      description:
        "A queer cabaret where every unique act appears one time only. Alt Comedy, Stand-Up, Drag, Burlesque, Art, Music, Live Looping, and more! The heat is on, the fiery sun is melting the tarmac, and Toronto's only live entertainment is back for a sweaty, unhinged July blowout. You'll laugh, you'll cry, you'll see queer people do weird, incredible things you've never seen before. Every act is one-of-a-kind and one-time only. BAD CABARET hosts stange and novel acts of all persuasions, every third week of the month at Sweet Action Theatre. Follow @baddmachine on Instagram for lineup announcements.",
      venue: "Sweet Action Theatre",
      venue_address: "180 Shaw Street",
      doors_time: "7:00 PM",
      start_time: "7:30 PM",
      producer: "James Jordan",
      ticket_prices: JSON.stringify({ advanceGA: 20 }),
      performers: JSON.stringify([5, 2, 3, 7]),
      buy_tickets:
        "https://www.eventbrite.ca/e/bad-cabaret-summer-madness-tickets-941598144397?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl",
    },
    {
      id: 4,
      name: "Decadence & Dishes: A Burlesque Feast",
      city: "Toronto",
      month: "July",
      day: "25",
      main_image: "https://reveal-images.s3.us-east-2.amazonaws.com/e4.jpg",
      description:
        "Indulge in an evening of sensual entertainment and culinary delights at Decadence & Dishes: A Burlesque Feast. Our tantalizing burlesque performers will whisk you away on a journey of seductive dance, playful tease, and mesmerizing charm, all while you savor a sumptuous summer menu crafted by our master chef. This unique fusion of gourmet dining and captivating burlesque promises an unforgettable night of indulgence and delight. Each ticket includes a $40 food voucher to enjoy from either the menu or the bar! Join us for a night where the art of burlesque meets the art of cuisine,and let Decadence & Dishes: A Burlesque Feast be your most delicious and dazzling night out this summer.",
      venue: "MY HOUSE",
      venue_address: "2882 Dundas Street West",
      doors_time: "6:00 PM",
      start_time: "9:00 PM",
      end_time: "11:00 PM",
      producer: "Mayfly Creative Productions",
      ticket_prices: JSON.stringify({ advanceGA: 65 }),
      performers: JSON.stringify([1, 6, 4, 3, 2]),
      buy_tickets:
        "https://www.eventbrite.ca/e/decadence-dishes-a-burlesque-feast-studio-54-tickets-922367234227?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl",
    },
    {
      id: 5,
      name: "Rouge Studio of Dance Showcase",
      city: "Toronto",
      month: "July",
      day: "27",
      main_image:
        "https://reveal-images.s3.us-east-2.amazonaws.com/image-placeholder.png",
      description:
        "Join us for the VERY FIRST Rouge Studio of Dance Toronto Student Showcase! Featuring the first graduating Level 3 Burlesque class, witness the exciting debuts of 6 new burlesque artists as we celebrate Rouge's first year in Toronto! Drinks will be available for purchase! There will be gogo so tipping is welcomed during their set. We will also have studio merch for sale. Please let the organizer know if you require accessibility seating Tickets are final sale and non-refundable. 19+ event. Get your tickets today, this event is not to be missed!",
      venue: "Super Wonder Gallery",
      venue_address: "1162 Bloor Street West",
      doors_time: "8:00 PM",
      start_time: "9:00 PM",
      end_time: "11:00 PM",
      producer: "Rouge School of Dance",
      ticket_prices: JSON.stringify({ advanceGA: 23 }),
      performers: JSON.stringify([]),
      buy_tickets:
        "https://www.eventbrite.ca/e/rouge-studio-of-dance-showcase-toronto-tickets-916851667017?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl",
    },
  ]);
}

/* COPY ME
 {
      id: ,
      name: "",
      city: "Toronto",
      month: "July",
      day: "",
      main_image: "https://reveal-images.s3.us-east-2.amazonaws.com/e1.jpg",
      description:
        "",
      venue: "",
      venue_address: "",
      doors_time: ":00 PM",
      start_time: ":00 PM",
      end_time: ":00 PM",
      producer: "",
      ticket_prices: JSON.stringify({  }),
      performers: JSON.stringify([]),
      buy_tickets: "",
    },
    */
