//calling controller
const {
    createEnvironnementController,
    getEnvironnementController,
    updateEnvironnementController,
    deleteEnvironnementController
  } = require("../controllers/environnement.controller");
  //calling module router from express
  
  const EtatEnv = require("express").Router();
  //appling get methode to the route
  EtatEnv.get("/", getEnvironnementController);

  //console.log("route get all etat_env !");
  
  //appling methode get by id for etatClient Route
//   EtatEnv.get("/:id", getEtatClientByIdController);
//   console.log("route get etat client by id");
  
  EtatEnv.put("/:id_env", updateEnvironnementController);
  
  EtatEnv.delete("/:id_env", deleteEnvironnementController);

  EtatEnv.post("/", createEnvironnementController);

  
  module.exports = EtatEnv;
  