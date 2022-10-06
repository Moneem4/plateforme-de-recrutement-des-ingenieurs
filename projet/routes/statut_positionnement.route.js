//calling statut_positionnement controller
const {
    createStatutPositionnementController,
    getStatutPositionnementController,
    updateStatutPositionnementController,
    deleteStatutPositionnementController,
  } = require("../controllers/statut_positionnement.controller.js");
  
  //calling the router module from express
  const statut_positionnementRoute = require("express").Router();
  
  //appling post methode to the route
  statut_positionnementRoute.post("/", createStatutPositionnementController);
  
  statut_positionnementRoute.get("/", getStatutPositionnementController);
  
  statut_positionnementRoute.put("/:id_statut_positionnement", updateStatutPositionnementController);
  
  statut_positionnementRoute.delete("/:id_statut_positionnement", deleteStatutPositionnementController);
  
  module.exports = statut_positionnementRoute;
  