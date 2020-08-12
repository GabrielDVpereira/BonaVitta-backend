import mongoose, { Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  description: string;
}

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Category", CategorySchema);
