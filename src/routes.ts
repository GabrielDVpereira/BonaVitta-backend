import { Router } from "express";
import AuthController from "./controllers/AuthController";
import PoductController from "./controllers/ProductController";
import CategoryController from "./controllers/CategoryController";
import AuthorizationMiddleware from "./middlewares/authorization";

const route = Router();

route.post("/user/create", AuthController.create);
route.post("/user/auth", AuthController.auth);

// route.use(AuthorizationMiddleware);

route.post("/product/create", PoductController.create);
route.get("/product/list", PoductController.index);

route.post("/category/create", CategoryController.create);
route.get("/category/list", CategoryController.index);

export default route;
