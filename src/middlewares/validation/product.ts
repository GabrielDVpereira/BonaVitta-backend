import {
  createSchema,
  updateSchema,
} from "../../utils/validation/schemas/product";
import { Request, Response, NextFunction } from "express";

class ProductValidation {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      await createSchema.validateAsync(req.body);
      return next();
    } catch (err) {
      return res.status(400).json({
        error: error.message || error,
      });
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      await updateSchema.validateAsync(req.body);
      return next();
    } catch (err) {
      return res.status(400).json({
        error: error.message || error,
      });
    }
  }
}

export default new ProductValidation();
