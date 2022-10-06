const res = require("express/lib/response");

//calling service
const {
    getAllPositionnementService,
    getPositionnementByIdService,
    updatePositionnementService,
    deletepositionnementService,
    getPositionnementAruelle
} = require("../services/positionnement.service");

//******************************************************************************************************************************************** */

const getPositionnementAruelleController =async(req, res) => {
    console.log('resultat body positionnement=====>', req.body.id_statut_positionnement);
    console.log('resultat params positionnement=====>',req.params.id_positionnement);
    let id_positionnement=req.params.id_positionnement;
    let  id_statut_positionnement=req.body.id_statut_positionnement;

    res.send(await getPositionnementAruelle(id_positionnement,id_statut_positionnement)
        .then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));};


//function that will user service getAllPositionnementService
const getAllPositionnementController = async(req, res) => {
    let id_positionnement=req.params.id_positionnement;
    let  id_statut_positionnement=req.body.id_statut_positionnement;

    res.send(await getAllPositionnementService( id_positionnement,
        id_statut_positionnement)
        .then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));

};

//******************************************************************************************************************************************** */

//getPositionnementById
const getPostitionnementByIdController = async(req, res) => {
    const id_positionnement = req.params.id_positionnement;


    res.send(await getPositionnementByIdService(id_positionnement).then(
            positionnement => {
                return positionnement;
            })


        .catch(err => {
            return console.log(`Error: ${err}`);
        }));
};

//**************************************************************************************************************** */

const updatePositionnementController = async(req, res) => {
    console.log('resultat bady====>', req.body);
    console.log('resultat params positionnement=====>', req.params);
    console.log(req.params.id_positionnement);
    console.log(req.body.id_statut_positionnement);
    let id_positionnement = req.params.id_positionnement;
    let id_statut_positionnement = req.body.id_statut_positionnement;


    res.send(
        await updatePositionnementService(
            id_positionnement,
            id_statut_positionnement
        ).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`))
    );
};
//**************************************************************************************************************** */
const deletePositionnementController = async(req, res) => {
    let id_positionnement = req.params.id_positionnement;
    res.send(await deletepositionnementService(id_positionnement).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};

//*************************************************************************************************************** */
module.exports = {
    getAllPositionnementController,
    getPostitionnementByIdController,
    deletePositionnementController,
    updatePositionnementController,
    getPositionnementAruelleController,
};