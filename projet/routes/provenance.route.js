//calling evaluation.controller controller
const {
    createProvenanceController,
    getProvenanceController,
    updateProvenanceController,
    deleteProvenanceController,
  } = require("../controllers/provenance.controller.js");
  
  //calling the router module from express
  const provenanceRoute = require("express").Router();
  
  //appling post methode to the route
  provenanceRoute.post("/", createProvenanceController);
  
  provenanceRoute.get("/", getProvenanceController);
  
  provenanceRoute.put("/:id_provenance", updateProvenanceController);
  
  provenanceRoute.delete("/:id_provenance", deleteProvenanceController);
  
  module.exports = provenanceRoute;
  