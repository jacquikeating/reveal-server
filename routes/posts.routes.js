import express from "express";
import knex from "knex";
import config from "../knexfile.js";
const router = express.Router();
const db = knex(config);

router.get("/", async (_req, res) => {
  try {
    const posts = await db("posts").select(
      "id",
      "user_id",
      "user_name",
      "timestamp",
      "content",
      "likes",
      "hashtags",
      "comments"
    );
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error_code: 500, error_msg: "Failed to GET posts list." });
  }
});

router.get("/:postID", async (req, res) => {
  try {
    const { postID } = req.params;
    const postData = await db("posts").where({ id: postID }).first();
    if (eventData) {
      res.status(200).json(postData);
    } else {
      res.status(404).json({
        error_code: 404,
        error_msg: `Post with id ${postID} not found.`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error_code: 500,
      error_msg: `Failed to GET post with id ${postID}.`,
    });
  }
});

export default router;
