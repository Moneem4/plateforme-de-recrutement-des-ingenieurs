const res = require("express/lib/response");

//calling service
const {
    getAllRessourceService,
    getRessourceByIdService,
    createRessourceService,
    updateRessourceService,
    deleteRessourcetService,
    getDetailleRessourceService
} = require("../services/ressourceInterne.service");

const getRessourceDetailleController = async(req, res) => {
    const id_ressource = req.params.id_ressource;


    res.send(await getDetailleRessourceService(id_ressource).then(
            resssource => {

                return resssource;
            })


        .catch(err => {
            return console.log(`Error: ${err}`);
        }));
};
//function that will user service getAllRessourceService
const getAllRessourceController = async(req, res) => {

    res.send(await getAllRessourceService()
        .then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));



};

//*************************************************************************************************************** */
//getressourceById
const getRessourceByIdController = async(req, res) => {
    const id_ressource = req.params.id_ressource;


    res.send(await getRessourceByIdService(id_ressource).then(
            resssource => {

                return resssource;
            })


        .catch(err => {
            return console.log(`Error: ${err}`);
        }));
};
//*************************************************************************************************************** */
const createRessourceController = async(req, res) => {

    // let id_ressource = req.body.id_ressource;

    let titre = req.body.titre;
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let date_de_naissance = req.body.date_de_naissance;
    let email = req.body.email;
    let telephone = req.body.telephone;
    let adress = req.body.adress;
    let ville = req.body.ville;
    let code_postal = req.body.code_postal;
    let pays = req.body.pays;
    let id_provenance = req.body.id_provenance;
    let id_status_profile = req.body.id_status_profile;
    let id_profile = req.body.id_profile;
    let num_piece_ident=123456789;
  
  
      res.send(
          await createRessourceService(
              //id_ressource,
              titre,
              nom,
              prenom,
              date_de_naissance,
              email,
              telephone,
              adress,
              ville,
              code_postal, 
              pays,
              id_provenance,
              id_status_profile,
              id_profile,
              num_piece_ident
 
    
            

        ).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
    
};
//**************************************************************************************************************** */

const updateRessourceController = async(req, res) => {
    let id_ressource = req.params.id_ressource;
    let titre = req.body.titre;
  let nom = req.body.nom;
  let prenom = req.body.prenom;
  let date_de_naissance = req.body.date_de_naissance;
  let email = req.body.email;
  let telephonne = req.body.telephone;
  let adress = req.body.adress;
  let ville = req.body.ville;
  let code_postal = req.body.code_postal;
  let pays = req.body.pays;
  let provenance = req.body.id_provenance;
  let statut_profile = req.body.id_status_profile;
  let profile = req.body.id_profile;
  let num_piece_ident=123456789;


    res.send(
        await updateRessourceService(
            id_ressource,
            titre,
            nom,
            prenom,
            date_de_naissance,
            email,
            telephonne,
            adress,
            ville,
            code_postal, 
            pays,
            provenance,
            statut_profile,
            profile,
            statut_profile,
            num_piece_ident
        ).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`))
    );
};
//*************************************************************************************************************** */
const deleteRessourceController = async(req, res) => {
    let id_ressource = req.params.id_ressource;
    res.send(await deleteRessourcetService(id_ressource).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};

//*************************************************************************************************************** */


module.exports = {
    getRessourceByIdController,
    getAllRessourceController,
    deleteRessourceController,
    updateRessourceController,
    createRessourceController,
    getRessourceDetailleController
};