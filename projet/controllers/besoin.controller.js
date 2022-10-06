const res = require("express/lib/response");

//calling service
const {
  getAllBesoinService,
  getBesoinByIdService,
  createBesoinService,
  deleteBesoinService,
  updateBesoinService,
  callProcedureService,
  getAllBesoinSansPlacementService,
  NbrBesoinAvecCondidatService,
  getBesoinByIdServiceForUpdate
} = require("../services/besoin.sevice");

//******************************************************************************************************************************************** */

const NbrBesoinAvecCondidatController = async (req, res) => {
  res.send(
    await NbrBesoinAvecCondidatService()
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};
//call procedure controller
console.log('try to call procesure controller');
const callProController = async (req, res) => {
  console.log('acess to call procesure controller');
let id_besoin = req.params.id_besoin;
  console.log('call procedure controller');

  res.send(
    await callProcedureService(id_besoin)
      .then((response) => {
        return response;
      })

      .catch((err) => {
        return console.log(`Error: ${err}`);
      })
  );
};
//function that will user service getAllCondidatService
const getAllBesoinSansPlacementController = async (req, res) => {
  res.send(
    await getAllBesoinSansPlacementService()
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};


//function that will user service getAllCondidatService
const getAllBesoinController = async (req, res) => {
  res.send(
    await getAllBesoinService()
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};

//******************************************************************************************************************************************** */

//getBesoinById
const getBesoinByIdControllerForUpdate = async (req, res) => {
  let id_besoin = req.params.id_besoin;

  res.send(
    
    await getBesoinByIdServiceForUpdate(id_besoin)
      .then((besoin) => {
        return besoin;
      })

      .catch((err) => {
        return console.log(`Error: ${err}`);
      })
  );
};

//******************************************************************************************************************************************** */

//getBesoinById
const getBesoinByIdController = async (req, res) => {
  let id_besoin = req.params.id_besoin;

  res.send(
    await getBesoinByIdService(id_besoin)
      .then((besoin) => {
        return besoin;
      })

      .catch((err) => {
        return console.log(`Error: ${err}`);
      })
  );
};
//*************************************************************************************************************** */
//*************************************************************************************************************** */
//*************************************************************************************************************** */
const createBesoinController = async (req, res) => {
  let id_client = req.body.id_client;
  let titre_besoin = req.body.titre_besoin;
  let id_statut_besoin = req.body.id_statut_besoin;
  let id_type_besoin = req.body.id_type_besoin;
  let id_domaine = req.body.id_domaine;
  let discription_offre = req.body.discription_offre;
  let id_experience = req.body.id_experience;
  let tjm = req.body.tjm;
  let id_note_profile = req.body.id_note_profile;
  let date_demarrage = req.body.date_demarrage;
  let date_reponse = req.body.date_reponse;
  let date_cloture = req.body.date_cloture;
  let id_ressource = req.body.id_ressource;
  let id_langue = req.body.langue;
  let id_outils = req.body.outils;
  let id_environnement = req.body.env;

  res.send(
    await createBesoinService(
      id_client,
      titre_besoin,
      id_statut_besoin,
      id_type_besoin,
      id_domaine,
      discription_offre,
      id_experience,
      tjm,
      id_note_profile,
      date_demarrage,
      date_reponse,
      date_cloture,
      id_ressource,
      id_langue,
      id_outils,
      id_environnement
    )
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};
//**************************************************************************************************************** */
//**************************************************************************************************************** */

//**************************************************************************************************************** */

const updateBesoinController = async (req, res) => {
  console.log("bonjour==>   ", req.params);
  console.log("lili==>", req.body);

  let id_besoin = req.params.id_besoin;
  let id_client = req.body.id_client;
  let titre_besoin = req.body.titre_besoin;
  let id_statut_besoin = req.body.id_statut_besoin;
  let id_type_besoin = req.body.id_type_besoin;
  let id_domaine = req.body.id_domaine;
  let discription_offre = req.body.discription_offre;
  let tjm = req.body.tjm;
  let date_demarrage = req.body.date_demarrage;
  let date_reponse = req.body.date_reponse;
  let date_cloture = req.body.date_cloture;
  
  let besoin_env_id = req.body.environnement;
  let lang_id = req.body.langue;
  let outil_id = req.body.outils;
  res.send(
    await updateBesoinService(
      id_besoin,
      id_client,
      titre_besoin,
      id_statut_besoin,
      id_type_besoin,
      id_domaine,
      discription_offre,
      
      tjm,
     
      date_demarrage,
      date_reponse,
      date_cloture,
      besoin_env_id,
      lang_id,
      outil_id
    
      
      )
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};
//**************************************************************************************************************** */
const deleteBesoinController = async (req, res) => {
  let id_besoin = req.params.id_besoin;
   
  res.send(
    await deleteBesoinService(id_besoin)
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
  
  
};

//*************************************************************************************************************** */

module.exports = {
  getAllBesoinController,
  getBesoinByIdController,
  createBesoinController,
  updateBesoinController,
  deleteBesoinController,
  callProController,
  getAllBesoinSansPlacementController,
  NbrBesoinAvecCondidatController,
  getBesoinByIdControllerForUpdate
};
