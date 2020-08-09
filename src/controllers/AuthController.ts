import User, { IUser } from "../models/User";
import bcrypt from "bcrypt";
import hashPassword from "../utils/generatePasswordHash";
import _ from "lodash";
import { Request, Response } from "express";

class AuthController {
  constructor() {}

  async create(req: Request, res: Response): Promise<Response> {
    const { email, name, password } = req.body;
    try {
      const password_hash = await hashPassword(password);
      const user: IUser = await User.create({ email, name, password });

      return res.json({ user: _.pick(user, ["name", "email", "_id"]) });
    } catch (err) {
      return res.status(400).json({ message: err.message || err });
    }
  }

  async auth(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const user: IUser = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "Email not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token = user.generateAuthToken();
      return res
        .header("x-auth-token", token)
        .json(_.pick(user, ["name, email", "_id"]));
    } else {
      return res.status(400).json({ message: "Wrong password provided" });
    }
  }
}

export default new AuthController();
