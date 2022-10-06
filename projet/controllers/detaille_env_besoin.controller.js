//callin service
const {createdetaille_env_besoinService
    ,getAlldetaille_env_besoinService,
    deletedetaille_env_besoinService,
    updatedetaille_env_besoinService,
    getdetaille_env_besoinByIdService,
    deletedetaille_env_besoinByIdService } = require("../services/detaille_env_besoin.service");
//function that will use service and the input user in order to  return result (create new outils) or error 



const getAlldetaille_env_besoinController = async (req, res) => {
    //sql query that will return all qr_getAlldetaille_env_besoin

    //promise that will return resolve (qr_getAlldetaille_env_besoin) or reject error
    res.send(
        await getAlldetaille_env_besoinService()
        .then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`))
        );
};
//get by id
const getdetaille_env_besoinByIdController = async(req, res) => {
    const id_besoin = req.params.id_besoin;
    const id_environnement = req.params.id_environnement;

    
    res.send(await getdetaille_env_besoinByIdService(id_besoin,id_langue).then((b) => {
        return b;
    }).catch(err => {
        return console.log(`Error: ${err}`);
    }));
};
//creation de detaille_env_besoin
const createdetaille_env_besoinController = async(req, res) => {
    const id_langue = req.body.id_langue;
    const id_besoin = req.body.id_besoin;


    await createdetaille_env_besoinService(id_besoin,id_langue)
        .then((response) => {
            console.log("controller result", response);
            return response;
        })
        .catch((err) =>
            console.log(`erreur: ${err}`));

    res.send("detaille_env_besoin created");


};
//update
const updatedetaille_env_besoinController = async(req, res) => {
   
    const id_environnement = req.body.id_environnement;
    const id_besoin = req.body.id_besoin;


    res.send(
        await updatedetaille_env_besoinService(    id_environnement,     id_besoin  ).then((response) => {
            return response;
        })
        .catch((err) => console.log(`error: ${err}`))
    );
};
//delete
const deletedetaille_env_besoinController = async(req, res) => {
    let id_besoin = req.params.id_besoin;
    res.send(await deletedetaille_env_besoinService(id_besoin).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};
//delete by id
const deletedetaille_env_besoinByIdController = async(req, res) => {
    const id_environnement = req.params.id_environnement;
    const id_besoin = req.params.id_besoin;
    res.send(await deletedetaille_env_besoinByIdService(id_besoin,id_environnement).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};

module.exports = {
    createdetaille_env_besoinController,
    getAlldetaille_env_besoinController,
    deletedetaille_env_besoinController,
    updatedetaille_env_besoinController,
    getdetaille_env_besoinByIdController,
    deletedetaille_env_besoinByIdController
};