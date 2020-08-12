import mongoose, { Document } from "mongoose";
import { ICategory } from "./Category";

export interface IProduct extends Document {
  name: string;
  amount: number;
  priceWholesale: number;
  priceReail: number;
  priceDistributor: number;
  category?: ICategory["_id"];
}

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    priceWholesale: {
      type: Number,
      required: true,
    },
    priceReail: {
      type: Number,
      required: true,
    },
    priceDistributor: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", ProductSchema);
