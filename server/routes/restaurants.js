import express from "express";
import Restaurant from "../models/Restaurant.js";

const router = express.Router();

// GET ALL RESTAURANTS
router.get("/", async (req, res) => {
  const data = await Restaurant.find();
  res.json(data);
});

// SEARCH (for later AI & mood)
router.get("/search", async (req, res) => {
  const { mood, cuisine, name } = req.query;
  const q = {};

  if (mood) q.mood_tags = mood;
  if (cuisine) q.cuisine = cuisine;

  if (name) {
    q.name = { $regex: name, $options: "i" }; // partial & case-insensitive
  }

  const data = await Restaurant.find(q);
  res.json(data);
});


export default router;
