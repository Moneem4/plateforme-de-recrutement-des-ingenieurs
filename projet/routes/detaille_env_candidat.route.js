//calling controller
const {
    createdetaille_env_candidatController,
    getAlldetaille_env_candidatController,
    deletedetaille_env_candidatController,
    updatedetaille_env_candidatController,
    getdetaille_env_candidatByIdController,
    deletedetaille_env_candidatByIdController
  } = require("../controllers/detaille_env_candidat.controller");
  
  //calling module router from express
  const detaille_env_candidatRoute = require("express").Router();
  
  //appling post methode to the route
  detaille_env_candidatRoute.get("/", getAlldetaille_env_candidatController);
  //console.log("route client  !");
  
  //appling methode get by id for clientRoute
  detaille_env_candidatRoute.get("/:id_condidat/:id_environnement", getdetaille_env_candidatByIdController);
  //console.log("route get all client by id   !");
  
  //appling methode post to the route
  detaille_env_candidatRoute.post("/new", createdetaille_env_candidatController);
  //console.log("route add client");
  
  //appling methode delete to the route
  detaille_env_candidatRoute.delete("/:id_condidat", deletedetaille_env_candidatController);
  //console.log("route delete client by id");
  detaille_env_candidatRoute.delete("/:id_condidat/:id_environnement", deletedetaille_env_candidatByIdController);

  //appling methode put to the route
  detaille_env_candidatRoute.put("/:id_condidat", updatedetaille_env_candidatController);
  //console.log("route update client");
  
  module.exports = detaille_env_candidatRoute;
  