import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
      min: 2,
      max: 1000,
    },
    category: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    rating: Number,
    supply: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
