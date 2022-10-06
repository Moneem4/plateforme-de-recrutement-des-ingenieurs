const res = require("express/lib/response");

//calling service
const {
    getAllProjectService,
    getProjectByIdService,
    updateProjetService,
    deleteProjetService,
    NbrProjetEncourService,
    NbrProjetCloturerService,
    NbrProjetParmoiService,
} = require("../services/projet.service");

const NbrProjetParmoiController = async(req, res) => {

    res.send(await NbrProjetParmoiService()
        .then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));



};
const NbrProjetCloturerController = async(req, res) => {

    res.send(await NbrProjetCloturerService()
        .then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));



};
const NbrProjetEncourController = async(req, res) => {

    res.send(await NbrProjetEncourService()
        .then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));



};
//function that will user service getAllProjetService
const getAllProjetController = async(req, res) => {

    res.send(await getAllProjectService()
        .then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));



};
//******************************************************************************************************************************************** */

//getProjetById
const getProjetByIdController = async(req, res) => {
    const id_projet = req.params.id_projet;


    res.send(await getProjectByIdService(id_projet).then(
            projet => {

                return projet;
            })


        .catch(err => {
            return console.log(`Error: ${err}`);
        }));
};


//**************************************************************************************************************** */

const updateProjetController = async(req, res) => {
    let id_projet = req.body.id_projet;
    let id_etat_projet = req.body.id_etat_projet;
    let explication = req.body.explication;
    console.log(req.body.explication);


    res.send(
        await updateProjetService(
            id_projet,explication,
            id_etat_projet
        ).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`))
    );
};
//**************************************************************************************************************** */
const deleteProjetController = async(req, res) => {
    let id_projet = req.params.id_projet;
    res.send(await deleteProjetService(id_projet).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};

//*************************************************************************************************************** */

module.exports = {
    getAllProjetController,
    getProjetByIdController,
    updateProjetController,
    deleteProjetController,
    NbrProjetCloturerController,
    NbrProjetEncourController,
    NbrProjetParmoiController,
};