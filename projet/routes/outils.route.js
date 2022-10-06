//calling controller outils.controller
const {
  createOutilsController,
  getOutilsController,
  updateOutilsController,
  deleteOutilsController,
} = require("../controllers/outils.controller");

//calling module router from express
const outilRoute = require("express").Router();

//appling post methode to the route
outilRoute.post("/", createOutilsController);
//console.log("route outils");

outilRoute.get("/", getOutilsController);

outilRoute.put("/:id_outils", updateOutilsController);

outilRoute.delete("/:id_outils", deleteOutilsController);

module.exports = outilRoute;
