//calling controller outils.controller
const {
    createoDomaineController,
    getDomaineController,
    updateDomaineController,
    deleteDomaineController
  } = require("../controllers/domaine.controller");
  
  //calling module router from express
  const DomaineRoute = require("express").Router();
  
  //appling post methode to the route
  DomaineRoute.post("/", createoDomaineController);
  //console.log("route Domaine");
  
  DomaineRoute.get("/", getDomaineController);
  
  DomaineRoute.put("/:id_mobilite", updateDomaineController);
  
  DomaineRoute.delete("/:id_mobilite", deleteDomaineController);
  
  module.exports = DomaineRoute;
  