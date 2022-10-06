//calling controller outils.controller
const {
    createoMobiliteController,
    getMobiliteController,
    updateMobiliteController,
    deleteMobiliteController
  } = require("../controllers/mobilite.controller");
  
  //calling module router from express
  const mobiliteRoute = require("express").Router();
  
  //appling post methode to the route
  mobiliteRoute.post("/", createoMobiliteController);
  //console.log("route mobilite");
  
  mobiliteRoute.get("/", getMobiliteController);
  
  mobiliteRoute.put("/:id_mobilite", updateMobiliteController);
  
  mobiliteRoute.delete("/:id_mobilite", deleteMobiliteController);
  
  module.exports = mobiliteRoute;
  