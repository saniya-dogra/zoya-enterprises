import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import cartRoutes from "./routes/cart.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Zoya Backend Running ✅");
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log("🚀 Server running on port 5000")
    );
  })
  .catch((err) => console.log("❌ Mongo Error:", err.message));
