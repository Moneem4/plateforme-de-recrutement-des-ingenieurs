//calling controller outils.controller
const {
    createDisponibiliteController,
  updateDisponibiliteController,
  getDisponibiliteController,
  deleteDisponibiliteController,
  } = require("../controllers/disponibilite.controller");
  
  //calling module router from express
  const dispRoute = require("express").Router();
  
  //appling post methode to the route
  dispRoute.post("/", createDisponibiliteController);
  //console.log("route outils");
  
  dispRoute.get("/", getDisponibiliteController);
  
  dispRoute.put("/:id_disp", updateDisponibiliteController);
  
  dispRoute.delete("/:id_disp", deleteDisponibiliteController);
  
  module.exports = dispRoute;
  