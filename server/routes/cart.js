import express from "express";
import Cart from "../models/Cart.js";

const router = express.Router();

// GET CART
router.get("/:userId", async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId });
  res.json(cart);
});

// ADD TO CART
router.post("/add", async (req, res) => {
  const { userId, item } = req.body;

  let cart = await Cart.findOne({ userId });
  if (!cart) cart = new Cart({ userId, items: [] });

  cart.items.push(item);
  await cart.save();

  res.json(cart);
});

export default router;
