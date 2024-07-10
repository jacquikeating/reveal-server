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
  .get("/", (req, res) => {
    res.send(dummyEventsData);
  })
  .get("/:eventID", (req, res) => {
    const params = req.params.eventID;
    res.send(dummyEventsData[params]);
  });

export default router;
