import User, { IUser } from "../models/User";
import hashPassword from "../utils/generatePasswordHash";
import _ from "lodash";
import { Request, Response } from "express";

class UserController {
  constructor() {}

  async index(req: Request, res: Response) {}
}

export default new UserController();
