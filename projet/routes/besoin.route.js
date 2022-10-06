const express = require("express");
//calling controller
const {
    getAllBesoinController,
    getBesoinByIdController,
    createBesoinController,
    updateBesoinController,
    deleteBesoinController,
    callProController,
    getAllBesoinSansPlacementController,
    NbrBesoinAvecCondidatController,
    getBesoinByIdControllerForUpdate,
} = require("../controllers/besoin.controller");

//calling module router from express


const besoinRoute = express.Router();


besoinRoute.get('/1', getAllBesoinSansPlacementController);
besoinRoute.get('/2', NbrBesoinAvecCondidatController);
besoinRoute.get('/updateById/:id_besoin', getBesoinByIdControllerForUpdate);

//appling methode get by id for positionnement candidat on besoin Route
besoinRoute.get('/posi/:id_besoin', callProController);
console.log("route get positionnement candidat on besoin getted by id  !");

//appling get methode to the route
besoinRoute.get('/', getAllBesoinController);
//console.log("route get all besoin  !");


//appling methode get by id for besoin Route
besoinRoute.get('/detail/:id_besoin', getBesoinByIdController);
//console.log("route get besoin by id   !");

besoinRoute.get('/', getAllBesoinSansPlacementController);


//appling methode post to the route
besoinRoute.post('/new', createBesoinController);
//console.log("route add besoin");

//appling methode delete to the route
besoinRoute.delete('/:id_besoin', deleteBesoinController);
//console.log("route delete besoin by id");

//appling methode put to the route
besoinRoute.put('/:id_besoin', updateBesoinController);
//console.log("route update besoin");



module.exports = besoinRoute;