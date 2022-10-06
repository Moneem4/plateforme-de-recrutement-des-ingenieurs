//callin service
const {createdetaille_outil_besoinService
    ,getAlldetaille_outil_besoinService,
    deletedetaille_outil_besoinService,
    updatedetaille_outil_besoinService,
    getdetaille_outil_besoinByIdService,
    deletedetaille_outil_besoinByIdService } = require("../services/detaille_outil_besoin.service");
//function that will use service and the input user in order to  return result (create new outils) or error 



const getAlldetaille_outil_besoinController = async (req, res)  => {
    //sql query that will return all qr_getAlldetaille_outil_besoin

    //promise that will return resolve (qr_getAlldetaille_outil_besoin) or reject error
    res.send(await getAlldetaille_outil_besoinService()
        .then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};
//get by id
const getdetaille_outil_besoinByIdController = async(req, res) => {
    const id_besoin = req.params.id_besoin;
    const id_outils = req.params.id_outils;

    
    res.send(await getdetaille_outil_besoinByIdService(id_besoin,id_outils).then((b) => {
        return b;
    }).catch(err => {
        return console.log(`Error: ${err}`);
    }));
};

//creation de detaille_outil_besoin
const createdetaille_outil_besoinController = async(req, res) => {
    const id_outils = req.body.id_outils;
    const id_besoin = req.body.id_besoin;


    await createdetaille_outil_besoinService(id_besoin,id_outils)
        .then((response) => {
            console.log("controller result", response);
            return response;
        })
        .catch((err) =>
            console.log(`erreur: ${err}`));

    res.send("detaille_outil_besoin created");


};
//update
const updatedetaille_outil_besoinController = async(req, res) => {
   
    const id_outils = req.body.id_outils;
    const id_besoin = req.body.id_besoin;


    res.send(
        await updatedetaille_outil_besoinService(       id_besoin,id_outils  ).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`))
    );
};
//delete
const deletedetaille_outil_besoinController = async(req, res) => {
    let id_besoin = req.params.id_besoin;
    res.send(await deletedetaille_outil_besoinService(id_besoin).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};
//delete by id
const deletedetaille_outil_besoinByIdController = async(req, res) => {
    const id_outils = req.params.id_outils;
    const id_besoin = req.params.id_besoin;
    res.send(await deletedetaille_outil_besoinByIdService(id_besoin,id_outils).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};

module.exports = {
    createdetaille_outil_besoinController,
    getAlldetaille_outil_besoinController,
    deletedetaille_outil_besoinController,
    updatedetaille_outil_besoinController,
    getdetaille_outil_besoinByIdController,
    deletedetaille_outil_besoinByIdController
};