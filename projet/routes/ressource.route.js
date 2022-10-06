//calling controller
const {
    getRessourceByIdController,
    getAllRessourceController,
    deleteRessourceController,
    updateRessourceController,
    createRessourceController,
    getRessourceDetailleController
} = require("../controllers/ressource.controller");




//calling module router from express
const ressourceRoute = require("express").Router();

//appling post methode to the route
ressourceRoute.get('/', getAllRessourceController);
//console.log("route get all ressource  !");
ressourceRoute.get('/detail/:id_ressource', getRessourceDetailleController);


//appling methode get by id for ressource
ressourceRoute.get("/:id_ressource", getRessourceByIdController);
//console.log("route get ressource by id   !");

//appling methode post to the route
ressourceRoute.post('/new', createRessourceController);
//console.log("route add ressource");

//appling methode delete to the route
ressourceRoute.delete('/:id_ressource', deleteRessourceController);
//console.log("route delete ressource by id");

//appling methode put to the route
ressourceRoute.put('/:id_ressource', updateRessourceController);
//console.log("route update ressource");






module.exports = ressourceRoute;