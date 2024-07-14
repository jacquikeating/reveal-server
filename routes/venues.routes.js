import express from "express";
import knex from "knex";
import config from "../knexfile.js";
const router = express.Router();
const db = knex(config);

// GET list of all venues with limited data
router.get("/", async (_req, res) => {
  try {
    const venues = await db("venues").select(
      "id",
      "name",
      "address",
      "city_id",
      "events"
    );
    res.status(200).json(venues);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error_code: 500, error_msg: "Failed to GET venues list." });
  }
});

// GET full data for a specific venue
router.get("/:venueID", async (req, res) => {
  try {
    const { venueID } = req.params;
    const venueData = await db("venues").where({ id: venueID }).first();
    if (venueData) {
      res.status(200).json(venueData);
    } else {
      res.status(404).json({
        error_code: 404,
        error_msg: `venue with id ${venueID} not found.`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error_code: 500,
      error_msg: `Failed to GET event with id ${venueID}.`,
    });
  }
});

export default router;
