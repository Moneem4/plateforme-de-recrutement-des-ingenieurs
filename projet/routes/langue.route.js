//calling controller outils.controller
const {
    createoLangueController,
    getLangueController,
    updateLangueController,
    deleteLangueController,
  } = require("../controllers/langue.controller");
  
  //calling module router from express
  const langueRoute = require("express").Router();
  
  //appling post methode to the route
  langueRoute.post("/", createoLangueController);
  //console.log("route langue");
  
  langueRoute.get("/", getLangueController);
  
  langueRoute.put("/:id_langue", updateLangueController);
  
  langueRoute.delete("/:id_langue", deleteLangueController);
  
  module.exports = langueRoute;
  