import express from "express";
import cors from "cors";
import fs from "fs";
import "dotenv/config";

const app = express();

let { PORT, CROSS_ORIGIN } = process.env;
PORT = PORT || 8082;

app.use(cors({ origin: CROSS_ORIGIN }));

app.use(express.json());

app.get("/healthcheck", (_req, res) => {
  res.send("If you're reading this, the server is running!");
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
