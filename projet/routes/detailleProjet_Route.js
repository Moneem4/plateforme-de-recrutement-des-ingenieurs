//calling controller detailleProjet.controller
const {
    
    getAlldetailleProjetController,
    getdetailleProjetByIdController,
    updatedetailleProjetController
  } = require("../controllers/detailleProjet_Controller");
  
  //calling module router from express
  const detailleProjetRoute = require("express").Router();
  

  
  detailleProjetRoute.get("/", getAlldetailleProjetController);
  detailleProjetRoute.get("/:id_besoin", getdetailleProjetByIdController);
  
  detailleProjetRoute.put("/:id_projet_positionnement", updatedetailleProjetController);
  
  
  module.exports = detailleProjetRoute;
  