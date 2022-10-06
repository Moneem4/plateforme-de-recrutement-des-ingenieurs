//calling controller outils.controller
const {
    createTypeProfileController, 
    getTypeProfileController, 
    updateTypeProfileController, 
    deleteTypeProfileController
} = require("../controllers/type_profile.controller");

//calling module router from express
const typeProfileRoute = require("express").Router();

//appling post methode to the route
typeProfileRoute.post("/", createTypeProfileController);
//console.log("route TypeProfile");

typeProfileRoute.get("/", getTypeProfileController);

typeProfileRoute.put("/:id_type_profile", updateTypeProfileController);

typeProfileRoute.delete("/:id_type_profile", deleteTypeProfileController);

module.exports = typeProfileRoute;
