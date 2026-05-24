import dotenv from "dotenv";
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import User from "../models/User.js";
import process from "node:process";
dotenv.config();

const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json("All fields are required");
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json("User already exists");
    }

    const hash = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hash,
    });

    await user.save();

    res.json({ message: "Account created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});


// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json("Invalid credentials");

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(400).json("Invalid credentials");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token, user });
});

// FORGOT PASSWORD
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json("Email is required");
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json("No account with that email address exists.");
    }

    // Generate token
    const token = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    await user.save();

    const resetLink = `http://localhost:5173/reset-password/${token}`;
    console.log("=== RESET LINK GENERATED ===");
    console.log(resetLink);
    console.log("============================");

    // Send email using Resend API (via fetch)
    if (process.env.RESEND_API_KEY) {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || "PINAKA <no-reply@pinakadefence.in>",
            to: [email],
            subject: "Reset Password - UberEats",
            html: `<p>You are receiving this because you (or someone else) have requested the reset of the password for your account.</p>
                   <p>Please click on the following link, or paste this into your browser to complete the process:</p>
                   <p><a href="${resetLink}">${resetLink}</a></p>
                   <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>`
          }),
        });

        if (!response.ok) {
          const errData = await response.json();
          console.error("Resend API error response:", errData);
        }
      } catch (err) {
        console.error("Failed to send email via Resend:", err);
      }
    } else {
      console.warn("RESEND_API_KEY is not defined. Email not sent.");
    }

    res.json({ message: "An e-mail has been sent to " + email + " with further instructions." });
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error during forgot password");
  }
});

// RESET PASSWORD
router.post("/reset-password/:token", async (req, res) => {
  try {
    const { password } = req.body;
    if (!password) {
      return res.status(400).json("Password is required");
    }

    const user = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json("Password reset token is invalid or has expired.");
    }

    // Hash the new password
    const hash = await bcrypt.hash(password, 10);
    user.password = hash;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.json({ message: "Success! Your password has been changed." });
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error during password reset");
  }
});

export default router;
