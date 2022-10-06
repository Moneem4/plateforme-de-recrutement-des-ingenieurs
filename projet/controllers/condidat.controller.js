const res = require("express/lib/response");

//calling service
const {
  getAllCandidatService,
  getCondidatByIdService,
  createCandidatService,
  deleteCandidatService,
  updateCondidatService,
  getNbrCondidatApositionnerService,
  getNbrCondidatpositionnerService,
  NbrCondidatCVenvoyeService,
  NbrCondidatProjetsEncoursService,
} = require("../services/condidat.service");


const NbrCondidatProjetsEncoursController = async (req, res) => {
  res.send(
    await NbrCondidatProjetsEncoursService()
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};

//******************************************************************************************************************************************** */

//function that will user service getAllCondidat a positionner Service
const NbrCondidatCVenvoyeController = async (req, res) => {
  res.send(
    await NbrCondidatCVenvoyeService()
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};

//******************************************************************************************************************************************** */


//function that will user service getAllCondidat a positionner Service
const getNbrCondidatApositionnerController = async (req, res) => {
  res.send(
    await getNbrCondidatApositionnerService()
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};

//******************************************************************************************************************************************** */

//function that will user service getAllCondidat a positionner Service
const getNbrCondidatpositionnerController = async (req, res) => {
  res.send(
    await getNbrCondidatpositionnerService()
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};

//******************************************************************************************************************************************** */

//function that will user service getAllCondidatService
const getAllCandidatController = async (req, res) => {
  res.send(
    await getAllCandidatService()
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};

//******************************************************************************************************************************************** */

//getCandidatById
const getCandidatByIdController = async (req, res) => {
  const id_condidat = req.params.id;

  res.send(
    await getCondidatByIdService(id_condidat)
      .then((condidat) => {
        return condidat;
      })

      .catch((err) => {
        return console.log(`Error: ${err}`);
      })
  );
};
//*************************************************************************************************************** */
const createCondidatController = async (req, res) => {
  // id_condidat,
  let num_piece_ident = req.body.num_piece_ident;
  let titre = req.body.titre;
  let nom = req.body.nom;
  let prenom = req.body.prenom;
  let Date_de_naissance = req.body.Date_de_naissance;
  let email = req.body.email;
  let telephonne = req.body.telephone;
  let adress = req.body.adress;
  let ville = req.body.ville;
  let code_postal = req.body.code_postal;
  let pays = req.body.pays;
  let experience_professionnelle = req.body.experience_professionnelle;
  let formation = req.body.formation;
  let provenance = req.body.id_provenance;
  let mobilite = req.body.id_mobilite;
  let notre_profile = req.body.id_note_profile;
  let statut_profile = req.body.id_status_profile;
  let profile = req.body.id_profile;
  let date_debut = req.body.date_debut;
  let date_fin = req.body.date_fin;
  let actif_ON = req.body.actif_ON;
  let ressource = req.body.id_ressource;
  let evaluation = req.body.id_evaluation;
  let condidat_env_id = req.body.env;
  let condidat_id = req.body.id_condidat;
  let lang_id = req.body.langue;
  let outil_id = req.body.id_outil;
  res.send(
    await createCandidatService(
      //id_condidat,
      num_piece_ident,
      titre,
      nom,
      prenom,
      Date_de_naissance,
      email,
      telephonne,
      adress,
      ville,
      code_postal,
      pays,
      experience_professionnelle,
      formation,
      provenance,
      mobilite,
      notre_profile,
      statut_profile,
      profile,
      date_debut,
      date_fin,
      actif_ON,
      ressource,
      evaluation,
      condidat_env_id,
      condidat_id,
      lang_id,
      outil_id)
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};
//**************************************************************************************************************** */
/**************************************************************************************************************** */

const updateCondidatController = async (req, res) => {
  console.log("bonjour==>", req.params);
  console.log("lili==>", req.body);
   let id_condidat = req.params.id_condidat;
   let num_piece_ident = req.body.num_piece_ident;
   let titre = req.body.titre;
   let nom = req.body.nom;
   let prenom = req.body.prenom;
   let Date_de_naissance = req.body.Date_de_naissance;
   let email = req.body.email;
   let telephonne = req.body.telephone;
   let adress = req.body.adress;
   let ville = req.body.ville;
   let code_postal = req.body.code_postal;
   let pays = req.body.pays;
   let experience_professionnelle = req.body.experience_professionnelle;
   let formation = req.body.formation;
   let provenance = req.body.id_provenance;
   let disponibilite = req.body.disponibilite;
   let mobilite = req.body.id_mobilite;
   let tjm = req.body.tjm;
   let notre_profile = req.body.notes_profils;
   let statut_profile = req.body.id_status_profile;
   let profile = req.body.profile;
   let date_debut = req.body.date_debut;
   let date_fin = req.body.date_fin;
   let actif_ON = req.body.actif_ON;
   let ressource = req.body.ressource;
   let evaluation = req.body.evaluation;
   let condidat_env_id = req.body.environnement;
   let lang_id = req.body.langue;
   let outil_id = req.body.outils;
  res.send(
    await updateCondidatService(
      id_condidat,
      num_piece_ident,
      titre,
      nom,
      prenom,
      Date_de_naissance,
      email,
      telephonne,
      adress,
      ville,
      code_postal,
      pays,
      experience_professionnelle,
      formation,
      provenance,
      disponibilite,
      mobilite,
      tjm,
      notre_profile,
      statut_profile,
      profile,
      date_debut,
      date_fin,
      actif_ON,
      ressource,
      evaluation,
      condidat_env_id,
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
const deleteCondidatController = async (req, res) => {
  let id_condidat = req.params.id_condidat;
  res.send(
    await deleteCandidatService(id_condidat)
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};

//*************************************************************************************************************** */

module.exports = {
  getAllCandidatController,
  getCandidatByIdController,
  createCondidatController,
  updateCondidatController,
  deleteCondidatController,
  getNbrCondidatApositionnerController,
  getNbrCondidatpositionnerController,
  NbrCondidatCVenvoyeController,
  NbrCondidatProjetsEncoursController,
};
