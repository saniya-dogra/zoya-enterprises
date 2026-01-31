import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();


// ===============================
// ✅ REGISTER
// ===============================
router.post("/register", async (req, res) => {
  try {
    console.log("REGISTER BODY:", req.body);

    const { name, email, password } = req.body;

    // ✅ validate
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // ✅ normalize email
    const cleanEmail = email.toLowerCase().trim();

    // ✅ check existing
    const existing = await User.findOne({ email: cleanEmail });
    if (existing) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // ✅ hash password
    const hashed = await bcrypt.hash(password, 10);

    // ✅ create user
    const user = await User.create({
      name: name.trim(),
      email: cleanEmail,
      password: hashed
    });

    console.log("REGISTER SUCCESS:", user._id);

    res.status(201).json({
      message: "User registered successfully"
    });

  } catch (err) {
    console.error("REGISTER ERROR:", err);

    res.status(500).json({
      message: "Server error during registration"
    });
  }
});


// ===============================
// ✅ LOGIN
// ===============================
router.post("/login", async (req, res) => {
  try {
    console.log("LOGIN BODY:", req.body);

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required"
      });
    }

    const cleanEmail = email.toLowerCase().trim();

    // ✅ find user
    const user = await User.findOne({ email: cleanEmail });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    // ✅ compare password
    const ok = await bcrypt.compare(password, user.password);

    if (!ok) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    // ✅ create token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    console.log("LOGIN SUCCESS:", user._id);

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (err) {
    console.error("LOGIN ERROR:", err);

    res.status(500).json({
      message: "Server error during login"
    });
  }
});


export default router;
