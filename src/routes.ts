import { Router } from "express";
import AuthController from "./controllers/AuthController";

const route = Router();

route.post("/user/create", AuthController.create);
route.post("/user/auth", AuthController.auth);

export default route;
