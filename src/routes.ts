import {Router} from 'express'; 

const route = Router(); 

route.get("/", (req, res) => {
  res.send("Server is up");
})

export default route;