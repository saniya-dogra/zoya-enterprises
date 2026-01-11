import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: String,
  items: [
    {
      productId: String,
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
});

export default mongoose.model("Cart", cartSchema);
