import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import process from "process";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import authRoutes from "./routes/auth.js";
import restaurantRoutes from "./routes/restaurants.js";

const app = express();

/* ✅ MIDDLEWARE ORDER MATTERS */
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

/* Static images */
app.use("/images", express.static(path.join(__dirname, "public/images")));

/* API Routes */
app.use("/api/auth", authRoutes);
app.use("/api/restaurants", restaurantRoutes);

/* Health check */
app.get("/", (req, res) => res.send("API running"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"));

app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
