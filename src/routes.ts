import { Router } from "express";
import AuthController from "./controllers/AuthController";

const route = Router();

route.post("/user/create", AuthController.create);

export default route;
