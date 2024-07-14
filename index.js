import express from "express";
import cors from "cors";
import fs from "fs";
import "dotenv/config";
import userRouter from "./routes/users.routes.js";
import eventsRouter from "./routes/events.routes.js";
import postsRouter from "./routes/posts.routes.js";
import citiesRouter from "./routes/cities.routes.js";
import venuesRouter from "./routes/venues.routes.js";

const app = express();

let { PORT, CROSS_ORIGIN } = process.env;
PORT = PORT || 8082;

app.use(cors({ origin: CROSS_ORIGIN }));
app.use(express.json());

app.use("/users", userRouter);
app.use("/events", eventsRouter);
app.use("/posts", postsRouter);
app.use("/cities", citiesRouter);
app.use("/venues", venuesRouter);

app.get("/healthcheck", (_req, res) => {
  res.send("If you're reading this, the server is running!");
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
