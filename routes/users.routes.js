import express from "express";
const router = express.Router();

const dummyUsersData = [
  {
    id: 1,
    name: "Velvet Vixen",
    avatar: "/src/assets/icons/avatar-placeholder.png",
    bio: "Velvet Vixen, known for her sultry and mesmerizing performances, combines classic burlesque with a modern twist. Her shows are a perfect blend of glamour and tease, making her a favorite on the burlesque circuit. With a background in ballet, she brings grace and precision to her every move.",
  },
  {
    id: 2,
    name: "Mister Midnight",
    avatar: "/src/assets/icons/avatar-placeholder.png",
    bio: "Mister Midnight captivates audiences with his dark, mysterious, and often comedic performances. As a boylesque performer, he challenges traditional gender norms, combining elegance with a rugged charm. His routines often feature elaborate costumes and a touch of gothic flair.",
  },
  {
    id: 3,
    name: " Pearl Noir",
    avatar: "/src/assets/icons/avatar-placeholder.png",
    bio: "Pearl Noir is a burlesque performer who exudes elegance and sophistication. Her performances are a tribute to the golden age of burlesque, featuring glamorous costumes and classic striptease routines. Pearl's timeless beauty and graceful movements make her a beloved figure in the burlesque community.",
  },
  {
    id: 4,
    name: "Duke DeLuxe",
    avatar: "/src/assets/icons/avatar-placeholder.png",
    bio: "Duke DeLuxe is a boylesque performer with a flair for the dramatic. His shows are a blend of theatricality and sensuality, often incorporating elaborate props and storylines. Duke's commanding stage presence and creative vision set him apart as a true showman.",
  },
  {
    id: 5,
    name: "Ivory Empress",
    avatar: "/src/assets/icons/avatar-placeholder.png",
    bio: "Ivory Empress is known for her ethereal and enchanting burlesque performances. Her routines often draw inspiration from fairy tales and fantasy, featuring whimsical costumes and magical themes. Ivory's delicate beauty and imaginative acts transport her audience to a world of enchantment.",
  },
  {
    id: 6,
    name: "Jasper Jinx",
    avatar: "/src/assets/icons/avatar-placeholder.png",
    bio: "Jasper Jinx is a boylesque performer known for his playful and energetic style. He incorporates elements of acrobatics and comedy into his acts, making every performance a dynamic and unforgettable experience. Jasper's infectious energy and charisma make him a standout on any stage.",
  },
];

router
  .get("/", (req, res) => {
    res.send(dummyUsersData);
  })
  .get("/:userID", (req, res) => {
    const params = req.params.userID;
    res.send(dummyUsersData[params]);
  });

export default router;
