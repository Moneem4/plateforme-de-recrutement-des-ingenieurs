//calling controller
const {
    createdetaille_outil_besoinController,
    getAlldetaille_outil_besoinController,
    deletedetaille_outil_besoinController,
    updatedetaille_outil_besoinController,
    getdetaille_outil_besoinByIdController,
    deletedetaille_outil_besoinByIdController
  } = require("../controllers/detaille_outil_besoin.controller");
  
  //calling module router from express
  const detaille_outil_besoinRoute = require("express").Router();
  
  //appling post methode to the route
  detaille_outil_besoinRoute.get("/", getAlldetaille_outil_besoinController);
  //console.log("route client  !");
  
  //appling methode get by id for clientRoute
  detaille_outil_besoinRoute.get("/:id_besoin/:id_outils", getdetaille_outil_besoinByIdController);
  //console.log("route get all client by id   !");
  
  //appling methode post to the route
  detaille_outil_besoinRoute.post("/new", createdetaille_outil_besoinController);
  //console.log("route add client");
  
  //appling methode delete to the route
  detaille_outil_besoinRoute.delete("/:id_besoin", deletedetaille_outil_besoinController);
  //console.log("route delete client by id");
  detaille_outil_besoinRoute.delete("/:id_besoin/:id_outils", deletedetaille_outil_besoinByIdController);

  //appling methode put to the route
  detaille_outil_besoinRoute.put("/:id_besoin", updatedetaille_outil_besoinController);
  //console.log("route update client");
  
  module.exports = detaille_outil_besoinRoute;
  