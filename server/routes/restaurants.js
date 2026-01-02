import express from "express";
import Restaurant from "../models/Restaurant.js";

const router = express.Router();

/* SEARCH FIRST */
router.get("/search", async (req, res) => {
  const { mood, cuisine, name } = req.query;
  const q = {};
  if (mood) q.mood_tags = mood;
  if (cuisine) q.cuisine = cuisine;
  if (name) q.name = { $regex: name, $options: "i" };
  res.json(await Restaurant.find(q));
});

/* STORE ROUTE */
router.get("/store/:slug", async (req, res) => {
  res.json(await Restaurant.findOne({ slug: req.params.slug }));
});

/* GET ALL */
router.get("/", async (req, res) => {
  res.json(await Restaurant.find());
});

/* GET BY ID (ALWAYS LAST) */
router.get("/:id", async (req, res) => {
  res.json(await Restaurant.findById(req.params.id));
});

export default router;
