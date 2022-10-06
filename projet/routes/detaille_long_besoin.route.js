//calling controller
const {
    createdetaille_long_besoinController,
    getAlldetaille_long_besoinController,
    deletedetaille_long_besoinController,
    updatedetaille_long_besoinController,
    getdetaille_long_besoinByIdController,
    deletedetaille_long_besoinByIdController
  } = require("../controllers/detaille_long_besoin.controller");
  
  //calling module router from express
  const detaille_long_besoinRoute = require("express").Router();
  
  //appling post methode to the route
  detaille_long_besoinRoute.get("/", getAlldetaille_long_besoinController);
  //console.log("route client  !");
  
  //appling methode get by id for clientRoute
  detaille_long_besoinRoute.get("/:id_besoin/:id_langue", getdetaille_long_besoinByIdController);
  //console.log("route get all client by id   !");
  
  //appling methode post to the route
  detaille_long_besoinRoute.post("/new", createdetaille_long_besoinController);
  //console.log("route add client");
  
  //appling methode delete to the route
  detaille_long_besoinRoute.delete("/:id_besoin", deletedetaille_long_besoinController);
  //console.log("route delete client by id");
  detaille_long_besoinRoute.delete("/:id_besoin/:id_langue", deletedetaille_long_besoinByIdController);

  //appling methode put to the route
  detaille_long_besoinRoute.put("/:id_besoin", updatedetaille_long_besoinController);
  //console.log("route update client");
  
  module.exports = detaille_long_besoinRoute;
  