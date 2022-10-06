//calling controller
const {
    getAllProjetController,
    getProjetByIdController,
    updateProjetController,
    deleteProjetController,
    NbrProjetEncourController,
    NbrProjetCloturerController,
    NbrProjetParmoiController,
} = require("../controllers/projet.controller");


//calling module router from express
const projetRoute = require("express").Router();

//appling post methode to the route
projetRoute.get('/', getAllProjetController);
projetRoute.get('/1', NbrProjetEncourController);
projetRoute.get('/2', NbrProjetCloturerController);
//console.log("route get all projet  !");
projetRoute.get('/10', NbrProjetParmoiController);

//appling methode get by id for projet
projetRoute.get("/:id_projet", getProjetByIdController);
//console.log("route get projet by id   !");



//appling methode delete to the route
projetRoute.delete('/:id_projet', deleteProjetController);
//console.log("route delete project by id");

//appling methode put to the route
projetRoute.put('/:id_projet', updateProjetController);
//console.log("route update project");




module.exports = projetRoute;