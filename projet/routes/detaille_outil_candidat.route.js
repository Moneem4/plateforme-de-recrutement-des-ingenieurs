//calling controller
const {
    createdetaille_outil_candidatController,
    getAlldetaille_outil_candidatController,
    deletedetaille_outil_candidatController,
    updatedetaille_outil_candidatController,
    getdetaille_outil_candidatByIdController,
    deletedetaille_outil_candidatByIdController
  } = require("../controllers/detaille_outil_candidat.controller");
  
  //calling module router from express
  const detaille_outil_candidatRoute = require("express").Router();
  
  //appling post methode to the route
  detaille_outil_candidatRoute.get("/", getAlldetaille_outil_candidatController);
  //console.log("route client  !");
  
  //appling methode get by id for clientRoute
  detaille_outil_candidatRoute.get("/:id_condidat/:id_outils", getdetaille_outil_candidatByIdController);
  //console.log("route get all client by id   !");
  
  //appling methode post to the route
  detaille_outil_candidatRoute.post("/new", createdetaille_outil_candidatController);
  //console.log("route add client");
  
  //appling methode delete to the route
  detaille_outil_candidatRoute.delete("/:id_condidat", deletedetaille_outil_candidatController);
  //console.log("route delete client by id");
  detaille_outil_candidatRoute.delete("/:id_condidat/:id_outils", deletedetaille_outil_candidatByIdController);

  //appling methode put to the route
  detaille_outil_candidatRoute.put("/:id_condidat", updatedetaille_outil_candidatController);
  //console.log("route update client");
  
  module.exports = detaille_outil_candidatRoute;
  