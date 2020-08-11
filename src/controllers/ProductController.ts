import Product, { IProduct } from "../models/Product";
import { Request, Response } from "express";

class ProductController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const product: IProduct = await Product.create(req.body);
      return res.json(product);
    } catch (err) {
      return res.status(400).json({ message: err.message || err });
    }
  }
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const products: IProduct = await Product.find();
      return res.json(products);
    } catch (err) {
      return res.status(400).json({ message: err.message || err });
    }
  }
}

export default new ProductController();
