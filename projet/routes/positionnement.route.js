//calling controller


const {
    getAllPositionnementController,
    getPostitionnementByIdController,
    deletePositionnementController,
    updatePositionnementController,
    getPositionnementAruelleController
} = require("../controllers/positionnement.controller");

//calling module router from express
const positionnementRoute = require("express").Router();

//appling post methode to the route
positionnementRoute.get('/', getAllPositionnementController);
//console.log("route positionnement  !");

positionnementRoute.get('/b/:id_positionnement', getPositionnementAruelleController);

//appling methode get by id for positionnementRoute
positionnementRoute.get("/:id_positionnement", getPostitionnementByIdController);
///console.log("route get positionnement by id   !");


//appling methode delete to the route
positionnementRoute.delete('/:id_positionnement', deletePositionnementController);
//console.log("route delete Positionnement by id");

//appling methode put to the route
positionnementRoute.put('/:id_positionnement', updatePositionnementController);
//console.log("route update Positionnement");




module.exports = positionnementRoute;