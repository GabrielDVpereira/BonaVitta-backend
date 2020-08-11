import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export interface IUser extends mongoose.Document {
  name: String;
  password_hash: String;
  email: string;
}

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password_hash: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    ref: "User",
  }
);

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      name: this.name,
      email: this.email,
      _id: this._id,
    },
    process.env.PRIVATE_KEY
  );

  return token;
};

export default mongoose.model<IUser>("User", UserSchema);
