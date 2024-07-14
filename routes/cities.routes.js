import express from "express";
import knex from "knex";
import config from "../knexfile.js";
const router = express.Router();
const db = knex(config);

// GET list of all cities with limited data
router.get("/", async (_req, res) => {
  try {
    const cities = await db("cities").select(
      "id",
      "city_name",
      "events",
      "venues"
    );
    res.status(200).json(cities);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error_code: 500, error_msg: "Failed to GET cities list." });
  }
});

// GET full data for a specific city
router.get("/:cityID", async (req, res) => {
  try {
    const { cityID } = req.params;
    const cityData = await db("cities").where({ id: cityID }).first();
    if (cityData) {
      res.status(200).json(cityData);
    } else {
      res.status(404).json({
        error_code: 404,
        error_msg: `City with id ${cityID} not found.`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error_code: 500,
      error_msg: `Failed to GET event with id ${cityID}.`,
    });
  }
});

export default router;
