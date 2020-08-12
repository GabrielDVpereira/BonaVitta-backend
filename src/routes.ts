import { Router } from "express";
import AuthController from "./controllers/AuthController";
import PoductController from "./controllers/ProductController";
import CategoryController from "./controllers/CategoryController";
import AuthorizationMiddleware from "./middlewares/authorization";

const route = Router();

route.post("/user/create", AuthController.create);
route.post("/user/auth", AuthController.auth);

// route.use(AuthorizationMiddleware);

/** PRODUCT ROUTES */
route.post("/product/create", PoductController.create);
route.get("/product/list", PoductController.index);
route.put("/product/:productId/update", PoductController.update);
route.delete("/product/:productId/delete", PoductController.delete);

/** CATEGORY ROUTES */
route.post("/category/create", CategoryController.create);
route.get("/category/list", CategoryController.index);
route.put("/category/:productId/update", CategoryController.update);
route.delete("/category/:productId/delete", CategoryController.delete);

export default route;
