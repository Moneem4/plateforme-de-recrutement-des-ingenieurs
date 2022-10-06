//calling controller
const {
  createProfileController,
  getAllProfileController,
  deleteProfileController,
  updateProfileController,
  getProfileByIdController,
} = require("../controllers/profile.controller");

//calling module router from express
const profileRoute = require("express").Router();

//appling post methode to the route
profileRoute.get("/", getAllProfileController);
//console.log("route client  !");

//appling methode get by id for clientRoute
profileRoute.get("/:id_profile", getProfileByIdController);
//console.log("route get all client by id   !");

//appling methode post to the route
profileRoute.post("/new", createProfileController);
//console.log("route add client");

//appling methode delete to the route
profileRoute.delete("/:id_profile", deleteProfileController);
//console.log("route delete client by id");

//appling methode put to the route
profileRoute.put("/:id_profile", updateProfileController);
//console.log("route update client");

module.exports = profileRoute;
