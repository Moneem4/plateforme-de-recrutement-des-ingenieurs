//calling societe controller 
const express = require('express');
const {
    createSocieteController,
    getAllSocieteController,
    getSocieteByIdController,
    updateSocieteController,
    deleteSocieteController
} = require("../controllers/societe.controller");



//calling module router from express 
const societeRoute = express.Router();


//appling methode get for societeRoute
societeRoute.get("/", getAllSocieteController);
//console.log("route get All societe");

//appling methode get by id for societeRoute
societeRoute.get("/:id", getSocieteByIdController);
//console.log("route get societe by id");

//appling methode post to the route
societeRoute.post('/new', createSocieteController);
//console.log("route add socicete");




//appling methode delete to the route
societeRoute.delete('/:id_societe', deleteSocieteController);
//console.log("route delete societe by id");

//appling methode put to the route
societeRoute.put('/:id_societe', updateSocieteController);
console.log("route update societe");

module.exports = societeRoute;