import express from "express";
const router = express.Router();

const dummyPostsData = [
  {
    id: 1,
    username: "Scarlet Siren",
    avatar: "../src/assets/icons/avatar-placeholder.png",
    timestamp: new Date().toLocaleDateString("en-US"),
    content:
      "I'm the hottest post on this site! (Mostly because I'm the first post.)",
    likes: 0,
    comments: [],
  },
  {
    id: 2,
    username: "Test User",
    avatar: "../src/assets/icons/avatar-placeholder.png",
    timestamp: new Date().toLocaleDateString("en-US"),
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eos inventore natus corrupti.",
    likes: 0,
    comments: [],
  },
];

router
  .get("/", (_req, res) => {
    res.send(dummyPostsData);
  })
  .get("/:postID", (req, res) => {
    const { postID } = req.params;
    res.send(dummyPostsData[postID]);
  });

export default router;
