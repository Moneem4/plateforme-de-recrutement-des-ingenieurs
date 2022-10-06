const res = require("express/lib/response");

//calling service
const {
    getdetailleProjetByService,
  getdetailleProjetByIdService,
  updateDetailProjetService
} = require("../services/detaille_projet_service");


//function that will user service getAlldetailleProjetService
const getAlldetailleProjetController = async(req, res) => {

    res.send(await getdetailleProjetByService()
        .then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));



};
//******************************************************************************************************************************************** */

//getdetailleProjetById
const getdetailleProjetByIdController = async(req, res) => {
    const id_besoin = req.params.id_besoin;


    res.send(await getdetailleProjetByIdService(id_besoin).then(
            detailleProjet => {

                return detailleProjet;
            })


        .catch(err => {
            return console.log(`Error: ${err}`);
        }));
};


//**************************************************************************************************************** */
//update statut commentaire
const updatedetailleProjetController = async(req, res) => {
    let id_projet_positionnement = req.params.id_projet;
    let commentaire = req.body.commentaire;


    res.send(
        await updateDetailProjetService(
            id_projet_positionnement,
            commentaire  
        ).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`))
    );
};

//*************************************************************************************************************** */

module.exports = {
    getAlldetailleProjetController,
    getdetailleProjetByIdController,
    updatedetailleProjetController
};