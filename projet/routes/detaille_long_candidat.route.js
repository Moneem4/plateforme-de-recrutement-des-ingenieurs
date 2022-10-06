//calling controller
const {
  createdetaille_long_CandidatController,
  updatedetaille_long_CandidatController,
  deletedetaille_long_Candidarontroller,
  getdetaille_long_CandidatByIdController,
  getAlldetaille_long_CandidatController,
  deletedetaille_long_CandidatByIdController
  } = require("../controllers/detaille_long_candidat.controller");
  
  //calling module router from express
  const detaille_long_candidatRoute = require("express").Router();
  
  //appling post methode to the route
  detaille_long_candidatRoute.get("/", getAlldetaille_long_CandidatController);
  //console.log("route client  !");
  
  //appling methode get by id for clientRoute
  detaille_long_candidatRoute.get("/:id_condidat/:id_langue", getdetaille_long_CandidatByIdController);
  //console.log("route get all client by id   !");
  
  //appling methode post to the route
  detaille_long_candidatRoute.post("/new", createdetaille_long_CandidatController);
  //console.log("route add client");
  
  //appling methode delete to the route
  detaille_long_candidatRoute.delete("/:id_condidat", deletedetaille_long_Candidarontroller);
  //console.log("route delete client by id");
  detaille_long_candidatRoute.delete("/:id_condidat/:id_langue", deletedetaille_long_CandidatByIdController);

  //appling methode put to the route
  detaille_long_candidatRoute.put("/:id_condidat", updatedetaille_long_CandidatController);
  //console.log("route update client");
  
  module.exports = detaille_long_candidatRoute;
  