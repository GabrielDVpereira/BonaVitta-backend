import { Request, Response } from "express";
import Category, { ICategory } from "../models/Category";

class CategoryController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const category: ICategory = await Category.create(req.body);
      return res.json(category);
    } catch (err) {
      return res.status({ message: err.message || err });
    }
  }
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const categories: [ICategory] = await Category.find();
      return res.json(categories);
    } catch (err) {
      return res.status({ message: err.message || err });
    }
  }
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { productId } = req.params;

      const category: ICategory = await Category.findOneAndUpdate(
        {
          _id: productId,
        },
        { ...req.body },
        { new: true }
      );
      return res.json(category);
    } catch (err) {
      return res.status({ message: err.message || err });
    }
  }
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { productId } = req.params;

      await Category.findByIdAndDelete({
        _id: productId,
      });
      return res.status(204).send();
    } catch (err) {
      return res.status({ message: err.message || err });
    }
  }
}

export default new CategoryController();
