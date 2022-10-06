//calling controller outils.controller
const {
  createStatutBesoinController,
  getStatutBesoinController,
  updateStatutBesoinController,
  deleteStatutBesoinController,
} = require("../controllers/statut_besoin.controller");

//calling module router from express
const statutBesoinRoute = require("express").Router();

//appling post methode to the route
statutBesoinRoute.post("/", createStatutBesoinController);
//console.log("route statutBesoin");

statutBesoinRoute.get("/", getStatutBesoinController);

statutBesoinRoute.put("/:id_statut_besoin", updateStatutBesoinController);

statutBesoinRoute.delete("/:id_statut_besoin", deleteStatutBesoinController);

module.exports = statutBesoinRoute;
