//calling controller experience.controller
const {
    createExperienceController,
    getExperienceController,
    updateExperienceController,
    deleteExperienceController,
  } = require("../controllers/experience.controller");
  
  //calling module router from express
  const experienceRoute = require("express").Router();
  
  //appling post methode to the route
  experienceRoute.post("/", createExperienceController);
  //console.log("route experienceRoute");
  
  experienceRoute.get("/", getExperienceController);
  
  experienceRoute.put("/:id_experience", updateExperienceController);
  
  experienceRoute.delete("/:id_experience", deleteExperienceController);
  
  module.exports = experienceRoute;
  