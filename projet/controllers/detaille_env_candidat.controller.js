//callin service
const {createdetaille_env_candidatService
    ,getAlldetaille_env_candidatService,
    deletedetaille_env_candidatService,
    updatedetaille_env_candidatService,
    getdetaille_env_candidatByIdService,
    deletedetaille_env_candidatByIdService } = require("../services/detaille_env_candidat.service");
//function that will use service and the input user in order to  return result (create new outils) or error 



const getAlldetaille_env_candidatController = async (req, res)  => {
    //sql query that will return all qr_getAlldetaille_env_candidat

    //promise that will return resolve (qr_getAlldetaille_env_candidat) or reject error
    res.send(await getAlldetaille_env_candidatService()
        .then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};
//get by id
const getdetaille_env_candidatByIdController = async(req, res) => {
    const id_condidat = req.params.id_condidat;
    const id_environnement = req.params.id_environnement;

    
    res.send(await getdetaille_env_candidatByIdService(id_condidat,id_environnement).then((b) => {
        return b;
    }).catch(err => {
        return console.log(`Error: ${err}`);
    }));
};

//creation de detaille_env_candidat
const createdetaille_env_candidatController = async(req, res) => {
    const id_environnement = req.body.id_environnement;
    const id_condidat = req.body.id_condidat;


    await createdetaille_env_candidatService(id_condidat,id_environnement)
        .then((response) => {
            console.log("controller result", response);
            return response;
        })
        .catch((err) =>
            console.log(`erreur: ${err}`));

    res.send("detaille_env_candidat created");


};
//update
const updatedetaille_env_candidatController = async(req, res) => {
   
    const id_environnement = req.body.id_environnement;
    const id_condidat = req.body.id_condidat;


    res.send(
        await updatedetaille_env_candidatService(    id_condidat,     id_environnement  ).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`))
    );
};
//delete
const deletedetaille_env_candidatController = async(req, res) => {
    let id_condidat = req.params.id_condidat;
    res.send(await deletedetaille_env_candidatService(id_condidat).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};
//delete by id
const deletedetaille_env_candidatByIdController = async(req, res) => {
    const id_environnement = req.params.id_environnement;
    const id_condidat = req.params.id_condidat;
    res.send(await deletedetaille_env_candidatByIdService(id_condidat,id_environnement).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};

module.exports = {
    createdetaille_env_candidatController,
    getAlldetaille_env_candidatController,
    deletedetaille_env_candidatController,
    updatedetaille_env_candidatController,
    getdetaille_env_candidatByIdController,
    deletedetaille_env_candidatByIdController
};