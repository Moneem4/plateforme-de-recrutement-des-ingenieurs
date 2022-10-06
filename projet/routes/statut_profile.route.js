//calling controller outils.controller
const {
    createStatutProfileController, 
    getStatutProfileController, 
    updateStatutProfileController, 
    deleteStatutProfileController
} = require("../controllers/statut_profile.controller");

//calling module router from express
const StatutProfileRoute = require("express").Router();

//appling post methode to the route
StatutProfileRoute.post("/", createStatutProfileController);
//console.log("route StatutProfile");

StatutProfileRoute.get("/", getStatutProfileController);

StatutProfileRoute.put("/:id_statut_profile", updateStatutProfileController);

StatutProfileRoute.delete("/:id_statut_profile", deleteStatutProfileController);

module.exports = StatutProfileRoute;
