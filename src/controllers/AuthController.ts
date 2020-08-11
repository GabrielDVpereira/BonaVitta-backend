import User, { IUser } from "../models/User";
import bcrypt from "bcrypt";
import hashPassword from "../utils/generatePasswordHash";
import _ from "lodash";
import { Request, Response } from "express";

class AuthController {
  constructor() {}

  async create(req: Request, res: Response): Promise<Response> {
    console.log(req);
    const { email, name, password } = req.body;
    try {
      const password_hash = await hashPassword(password);
      const user: IUser = await User.create({ email, name, password_hash });

      return res.json({ user: _.pick(user, ["name", "email", "_id"]) });
    } catch (err) {
      return res.status(400).json({ message: err.message || err });
    }
  }

  async auth(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    try {
      const user: IUser = await User.findOne({ email });

      if (!user) return res.status(400).json({ message: "Email not found" });
      console.log(password, user.password_hash);
      const isPasswordValid = await bcrypt.compare(
        password,
        user.password_hash
      );

      if (isPasswordValid) {
        const token = user.generateAuthToken();
        console.log(user);
        console.log(token);
        return res
          .header("x-auth-token", token)
          .json(_.pick(user, ["name", "email", "_id"]));
      } else {
        return res.status(400).json({ message: "Wrong password provided" });
      }
    } catch (err) {
      return res.status(400).json({ message: err.message || err });
    }
  }
}

export default new AuthController();
