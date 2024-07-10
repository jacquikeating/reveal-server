import express from "express";
const router = express.Router();

const dummyEventsData = [
  {
    id: 1,
    name: "Event A",
    date: "Yesterday",
  },
  {
    id: 2,
    name: "Event B",
    date: "Today",
  },
  {
    id: 3,
    name: "Event C",
    date: "Tomorrow",
  },
];

router
  .get("/", (_req, res) => {
    res.send(dummyEventsData);
  })
  .get("/:eventID", (req, res) => {
    const { eventID } = req.params;
    res.send(dummyEventsData[eventID]);
  });

export default router;
