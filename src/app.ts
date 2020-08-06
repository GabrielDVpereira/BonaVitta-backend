import express from 'express';
import routes from './routes'; 
class App {
  constructor(){
    this.app = express(); 
    this.routes();
  }

  middlewares(){}
  routes(){
    this.app.use(routes); 
  }

}

export export default new App().app