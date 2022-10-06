//calling controller
const {
    getAllCandidatController,
    getCandidatByIdController,
    createCondidatController,
    updateCondidatController,
    deleteCondidatController,
    getNbrCondidatApositionnerController,
    getNbrCondidatpositionnerController,
    NbrCondidatCVenvoyeController,
    NbrCondidatProjetsEncoursController,
} = require("../controllers/condidat.controller");


//calling module router from express
const candidatRoute = require("express").Router();

//appling get methode to the route
candidatRoute.get('/1', getNbrCondidatApositionnerController);
candidatRoute.get('/2', getNbrCondidatpositionnerController);
candidatRoute.get('/3', NbrCondidatCVenvoyeController);
candidatRoute.get('/4', NbrCondidatProjetsEncoursController);

//appling get methode to the route
candidatRoute.get('/', getAllCandidatController);
//console.log("route candidat  !");


//appling methode get by id for candidatRoute
candidatRoute.get("/:id", getCandidatByIdController);
//console.log("route get candidat by id   !");

//appling methode post to the route
candidatRoute.post('/new', createCondidatController);
//console.log("route add candidat");

//appling methode delete to the route
candidatRoute.delete('/:id_condidat', deleteCondidatController);
//console.log("route delete candidat by id");

//appling methode put to the route
candidatRoute.put('/:id_condidat', updateCondidatController);
//console.log("route update candidat");




module.exports = candidatRoute;