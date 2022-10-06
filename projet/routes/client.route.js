//calling controller
const {
    getAllClientController,
    getClientByIdController,
    createClientController,
    updateClientController,
    deleteClientController,
    getAllClientprospectController,
    getClientController,
    getClientArchiveController,
} = require("../controllers/client.controller");


//calling module router from express
const clientRoute = require("express").Router();

//get nbrby etatclient
clientRoute.get('/1', getAllClientprospectController);
clientRoute.get('/2', getClientController);
clientRoute.get('/3', getClientArchiveController);



//appling post methode to the route
clientRoute.get('/', getAllClientController);
//console.log("route client  !");
//appling methode get by id for clientRoute
clientRoute.get("/:id", getClientByIdController);
//console.log("route get all client by id   !");

//appling methode get by id for clientRoute
clientRoute.get("/detail/:id", getClientByIdController);
//console.log("route get all client by id   !");

//appling methode post to the route
clientRoute.post('/new', createClientController);
//console.log("route add client");

//appling methode delete to the route
clientRoute.delete('/:id_client', deleteClientController);
//console.log("route delete client by id");

//appling methode put to the route
clientRoute.put('/:id_client', updateClientController);
//console.log("route update client");


module.exports = clientRoute;