import express from "express";
import routes from "./routes";
import "./config/database";
class App {
  constructor() {
    this.app = express();
    this.routes();
  }

  middlewares() {}
  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
