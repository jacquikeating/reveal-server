import express from "express";
import knex from "knex";
import config from "../knexfile.js";
const router = express.Router();
const db = knex(config);
import { body, validationResult } from "express-validator";

// GET all posts
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
      "comments",
      "avatar"
    );
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error_code: 500, error_msg: "Failed to GET posts list." });
  }
});

// GET one specific post
router.get("/:postID", async (req, res) => {
  try {
    const { postID } = req.params;
    const postData = await db("posts").where({ id: postID }).first();
    if (postData) {
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

// GET all posts by a specific user
router.get("/by-user/:userID", async (req, res) => {
  try {
    const { userID } = req.params;
    const postData = await db("posts").where({ user_id: userID });
    if (postData) {
      res.status(200).json(postData);
    } else {
      res.status(404).json({
        error_code: 404,
        error_msg: `Post with those parameters not found.`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error_code: 500,
      error_msg: `Failed to GET posts.`,
    });
  }
});

// POST a new post
router.post("/", [body("content").notEmpty().escape()], async (req, res) => {
  try {
    const newPost = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(printErrors(errors.errors));
    }

    const [newPostID] = await db("posts").insert(newPost);

    const newPostRecord = await db("posts")
      .select("*")
      .where("id", newPostID)
      .first();

    res.status(201).json({
      ...newPostRecord,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error_code: 500,
      error_msg: "Server failed to POST new post.",
    });
  }
});

function printErrors(errors) {
  const errorPaths = errors.map((error) => {
    return error.path.replace(/\_/g, " "); // replace underscores with spaces
  });
  let noDuplicateErrors = [...new Set(errorPaths)]; // phone-related errors print twice
  if (noDuplicateErrors.length === 1) {
    return `Unable to complete your request due to invalid data in the ${noDuplicateErrors[0]} field. Please confirm your entry is correct and try again.`;
  } else {
    return `Unable to complete your request due to invalid data in the following fields: ${noDuplicateErrors.join(
      ", "
    )}. Please confirm your entries are correct and try again.`;
  }
}

export default router;
