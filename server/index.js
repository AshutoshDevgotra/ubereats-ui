import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import process from "node:process";

dotenv.config();

import authRoutes from "./routes/auth.js";
const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
mongoose.connect(process.env.MONGO_URI)
  .then(()=>console.log("MongoDB Connected"));

app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

