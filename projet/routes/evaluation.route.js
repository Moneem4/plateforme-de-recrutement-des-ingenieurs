//calling evaluation.controller controller
const {
  createEvaluationController,
  getEvaluationController,
  updateEvaluationController,
  deleteEvaluationController,
} = require("../controllers/evaluation.controller.js");

//calling the router module from express
const evaluationRoute = require("express").Router();

//appling post methode to the route
evaluationRoute.post("/", createEvaluationController);

evaluationRoute.get("/", getEvaluationController);

evaluationRoute.put("/:id_evaluation", updateEvaluationController);

evaluationRoute.delete("/:id_evaluation", deleteEvaluationController);

module.exports = evaluationRoute;
