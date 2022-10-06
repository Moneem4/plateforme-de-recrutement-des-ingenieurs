//calling controller outils.controller
const {
  createTypeBesoinController,
  getTypeBesoinController,
  updateTypeBesoinController,
  deleteTypeBesoinController,
} = require("../controllers/type_besoin.controller");

//calling module router from express
const typeBesoinRoute = require("express").Router();

//appling post methode to the route
typeBesoinRoute.post("/", createTypeBesoinController);
//console.log("route TypeBesoin");

typeBesoinRoute.get("/", getTypeBesoinController);

typeBesoinRoute.put("/:id_type_besoin", updateTypeBesoinController);

typeBesoinRoute.delete("/:id_type_besoin", deleteTypeBesoinController);

module.exports = typeBesoinRoute;
