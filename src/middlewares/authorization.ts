import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<NextFunction, Response> {
  try {
    const token = req.headers["x-auth-token"];
    if (!token) {
      return res.status(401).json({ message: "Auth token must be provided!" });
    }

    const user = await jwt.verify(token, process.env.PRIVATE_KEY);
    req.user = user;

    return next();
  } catch (err) {
    return res.status(403).json({ message: err.message || err });
  }
}
