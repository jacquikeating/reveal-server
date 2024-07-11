import express from "express";
import knex from "knex";
import config from "../knexfile.js";
const router = express.Router();
const db = knex(config);

// GET list of all users with limited data
router.get("/", async (_req, res) => {
  try {
    const users = await db("users").select("id", "name", "avatar");
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error_code: 500, error_msg: "Failed to GET user list." });
  }
});

// GET full data for a specific user
router.get("/:userID", async (req, res) => {
  try {
    const { userID } = req.params;
    const userData = await db("users").where({ id: userID }).first();
    if (userData) {
      res.status(200).json(userData);
    } else {
      res.status(404).json({
        error_code: 404,
        error_msg: `User with id ${userID} not found.`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error_code: 500,
      error_msg: `Failed to GET user with id ${userID}.`,
    });
  }
});

export default router;
