//calling controller
const {
  getAllEtatClientController,
  getEtatClientByIdController,
  updateEtatClientController,
  deleteEtatClientController,
} = require("../controllers/etatClient.controller");
//calling module router from express

const EtatCRoute = require("express").Router();
//appling get methode to the route
EtatCRoute.get("/", getAllEtatClientController);
//console.log("route get all etatClient !");

//appling methode get by id for etatClient Route
EtatCRoute.get("/:id", getEtatClientByIdController);
//console.log("route get etat client by id");

EtatCRoute.put("/:id", updateEtatClientController);

EtatCRoute.delete("/:id", deleteEtatClientController);

module.exports = EtatCRoute;
