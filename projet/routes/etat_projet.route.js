//calling controller
const {
    getAllEtatProjetController,
    getEtatProjetByIdController,
    updateEtatProjetController,
    deleteEtatProjetController
  } = require("../controllers/etat_projet.controller");
  //calling module router from express
  
  const EtatPRoute = require("express").Router();
  //appling get methode to the route
  EtatPRoute.get("/", getAllEtatProjetController);
  
  //appling methode get by id for etatProjet Route
  EtatPRoute.get("/:id", getEtatProjetByIdController);
  
  EtatPRoute.put("/:id", updateEtatProjetController);
  
  EtatPRoute.delete("/:id", deleteEtatProjetController);
  
  module.exports = EtatPRoute;
  