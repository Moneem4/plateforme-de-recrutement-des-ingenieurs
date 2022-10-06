const res = require("express/lib/response");

//cqlling service

const {
  getAllSocieteService,
  getSocieteByIdService,
  createSocieteService,
  updateSocieteService,
  deleteSocieteService,
} = require("../services/societe.service");

//function that will use sevice and user input to return response(created societe) or error
const createSocieteController = async (req, res) => {
  const nom = req.body.nom;
  const effectif = req.body.effectif;
  const societe_mere = req.body.societe_mere;
  const telephone = req.body.telephone;
  const site_web = req.body.site_web;
  const adresse = req.body.adresse;
  const code_postal = req.body.code_postal;
  const ville = req.body.ville;
  const pays = req.body.pays;
  const date_debut = req.body.date_debut;
  const date_fin = req.body.date_fin;
  const secteur = req.body.secteur;
  const id_provenance = req.body.id_provenance;
  const statut_juridique = req.body.statut_juridique;
  const tva_ic = req.body.tva_ic;
  const siret = req.body.siret;
  const code_ape = req.body.code_ape;

  res.send(
    await createSocieteService(
      nom,
      effectif,
      societe_mere,
      telephone,
      site_web,
      adresse,
      code_postal,
      ville,
      pays,
      date_debut,
      date_fin,
      secteur,
      id_provenance,
      statut_juridique,
      tva_ic,
      siret,
      code_ape
    )
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};
//******************************************************************************************************************************************* */
//function that will use sevice and user input to return response(created societe) or error
const updateSocieteController = async (req, res) => {
  console.log("bonjour==>", req.params);
  console.log("Body ==>", req.body);
  const id_societe = req.params.id_societe;
  const nom = req.body.nom;
  const effectif = req.body.effectif;
  const societe_mere = req.body.societe_mere;
  const telephone = req.body.telephone;
  const site_web = req.body.site_web;
  const adresse = req.body.adresse;
  const code_postal = req.body.code_postal;
  const ville = req.body.ville;
  const pays = req.body.pays;
  const date_debut = req.body.date_debut;
  const date_fin = req.body.date_fin;
  const secteur = req.body.secteur;
  const id_provenance = req.body.id_provenance;
  const statut_juridique = req.body.statut_juridique;
  const tva_ic = req.body.tva_ic;
  const siret = req.body.siret;
  const code_ape = req.body.code_ape;

  console.log(req.body);
  res.send(
    await updateSocieteService(
      id_societe,
      nom,
      effectif,
      societe_mere,
      telephone,
      site_web,
      adresse,
      code_postal,
      ville,
      pays,
      date_debut,
      date_fin,
      secteur,
      id_provenance,
      statut_juridique,
      tva_ic,
      siret,
      code_ape
    )
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};

//******************************************************************************************************************************************* */
const deleteSocieteController = async (req, res) => {
  let id_societe = req.params.id_societe;
  console.log(id_societe);
  res.send(
    await deleteSocieteService(id_societe)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};

//******************************************************************************************************************************************* */

//function that will use the service to return all societe or error
const getAllSocieteController = async (req, res) => {
  res.send(
    await getAllSocieteService()
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error, ${err} `))
  );
};

//*************************************************************************************************************** */
//getSocieteById
const getSocieteByIdController = async (req, res) => {
  const id_societe = req.params.id;

  res.send(
    await getSocieteByIdService(id_societe)
      .then((response) => {
        return response;
      })

      .catch((err) => {
        return console.log(`Error: ${err}`);
      })
  );
};

module.exports = {
  createSocieteController,
  getAllSocieteController,
  getSocieteByIdController,
  updateSocieteController,
  deleteSocieteController,
};
