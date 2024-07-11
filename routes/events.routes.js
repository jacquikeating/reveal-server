import express from "express";
import knex from "knex";
import config from "../knexfile.js";
const router = express.Router();
const db = knex(config);

// GET list of all events with limited data
router.get("/", async (_req, res) => {
  try {
    const events = await db("events").select(
      "id",
      "name",
      "main_image",
      "month",
      "day"
    );
    res.status(200).json(events);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error_code: 500, error_msg: "Failed to GET events list." });
  }
});

// GET full data for a specific event
router.get("/:eventID", async (req, res) => {
  try {
    const { eventID } = req.params;
    const userData = await db("users").where({ id: eventID }).first();
    if (userData) {
      res.status(200).json(userData);
    } else {
      res.status(404).json({
        error_code: 404,
        error_msg: `Event with id ${eventID} not found.`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error_code: 500,
      error_msg: `Failed to GET event with id ${eventID}.`,
    });
  }
});

export default router;
