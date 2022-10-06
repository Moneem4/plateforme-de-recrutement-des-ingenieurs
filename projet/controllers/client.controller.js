const res = require("express/lib/response");

//calling service
const {
  getAllClientService,
  getClientByIdService,
  updateClientService,
  createClientService,
  deleteClientService,
  getAllClientprospectService,
  getClientService,
  getClientArchiveService,
} = require("../services/client.service");
//function that will user service getAllClientService
const getAllClientprospectController = async (req, res) => {
  res.send(
    await getAllClientprospectService()
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};

//****************************************************************************************************************
//function that will user service getAllClientService
const getClientController = async (req, res) => {
  res.send(
    await getClientService()
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};

//****************************************************************************************************************
//function that will user service getAllClientService
const getClientArchiveController = async (req, res) => {
  res.send(
    await getClientArchiveService()
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};

//****************************************************************************************************************


//function that will user service getAllClientService
const getAllClientController = async (req, res) => {
  res.send(
    await getAllClientService()
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};

//****************************************************************************************************************
//getCandidatById
const getClientByIdController = async (req, res) => {
  const id_client = req.params.id;
  console.log(req.params);
  console.log(req.body);

  res.send(
    await getClientByIdService(id_client)
      .then((client) => {
        return client;
      })
      .catch((err) => {
        return console.log(`Error: ${err}`);
      })
  );
};

//*************************************************************************************************************** */
const createClientController = async (req, res) => {
  // id_client,
  console.log("bonjour==>", req.params);
  console.log("lili==>", req.body);
  let nom = req.body.nom;
  let prenom = req.body.prenom;
  let fonction = req.body.fonction;
  let service = req.body.service;
  let provenance = req.body.id_provenance;
  let ressource = req.body.id_ressource;
  let societe = req.body.id_societe;
  let etat_client = req.body.id_etat_client;
  let email = req.body.email;
  let telephonne = req.body.telephonn;
  let adress = req.body.adresse;
  let domaine = req.body.id_domaine;
  console.log("les donné recupérer",res);
  res.send(
    await createClientService(
  
      nom,
      prenom,
      fonction,
      service,
      societe,
      domaine,
      email,
      telephonne,
      adress,
      provenance,
      ressource,
      etat_client,
    )
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};
//**************************************************************************************************************** */

const updateClientController = async (req, res) => {
  console.log("bonjour==>", req.params);
  console.log("lili==>", req.body);
  let id_client = req.params.id_client;
  let nom = req.body.nom;
  let prenom = req.body.prenom;
  let fonction = req.body.fonction;
  let service = req.body.service;
  let provenance = req.body.id_provenance;
  let ressource = req.body.id_ressource;
  let societe = req.body.id_societe;
  let etat_client = req.body.id_etat_client;
  let email = req.body.email;
  let telephonne = req.body.telephonne;
  let adress = req.body.adresse;
  let domaine = req.body.id_domaine;

  res.send(
    await updateClientService(
      id_client,
      nom,
      prenom,
      fonction,
      service,
      provenance,
      ressource,
      societe,
      etat_client,
      email,
      telephonne,
      adress,
      domaine,
    )
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};
//**************************************************************************************************************** */
const deleteClientController = async (req, res) => {
  let id_client = req.params.id_client;
  res.send(
    await deleteClientService(id_client)
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};

//****************************************************************************************************************/

module.exports = {
  getAllClientController,
  getClientByIdController,
  createClientController,
  updateClientController,
  deleteClientController,
  getAllClientprospectController,
  getClientController,
  getClientArchiveController,

};
