//callin service
const {createdetaille_outil_candidatService
    ,getAlldetaille_outil_candidatService,
    deletedetaille_outil_candidatService,
    updatedetaille_outil_candidatService,
    getdetaille_outil_candidatByIdService,
    deletedetaille_outil_candidatByIdService } = require("../services/detaille_outil_candidat.service");
//function that will use service and the input user in order to  return result (create new outils) or error 



const getAlldetaille_outil_candidatController = async (req, res)  => {
    //sql query that will return all qr_getAlldetaille_outil_candidat

    //promise that will return resolve (qr_getAlldetaille_outil_candidat) or reject error
    res.send(await getAlldetaille_outil_candidatService()
        .then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};
//get by id
const getdetaille_outil_candidatByIdController = async(req, res) => {
    const id_condidat = req.params.id_condidat;
    const id_langue = req.params.id_langue;

    
    res.send(await getdetaille_outil_candidatByIdService(id_condidat,id_langue).then((b) => {
        return b;
    }).catch(err => {
        return console.log(`Error: ${err}`);
    }));
};

//creation de detaille_outil_candidat
const createdetaille_outil_candidatController = async(req, res) => {
    const id_langue = req.body.id_langue;
    const id_condidat = req.body.id_condidat;


    await createdetaille_outil_candidatService(id_condidat,id_langue)
        .then((response) => {
            console.log("controller result", response);
            return response;
        })
        .catch((err) =>
            console.log(`erreur: ${err}`));

    res.send("detaille_outil_candidat created");


};
//update
const updatedetaille_outil_candidatController = async(req, res) => {
   
    const id_langue = req.body.id_langue;
    const id_condidat = req.body.id_condidat;


    res.send(
        await updatedetaille_outil_candidatService(       id_condidat,id_langue  ).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`))
    );
};
//delete
const deletedetaille_outil_candidatController = async(req, res) => {
    let id_condidat = req.params.id_condidat;
    res.send(await deletedetaille_outil_candidatService(id_condidat).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};
//delete by id
const deletedetaille_outil_candidatByIdController = async(req, res) => {
    const id_langue = req.params.id_langue;
    const id_condidat = req.params.id_condidat;
    res.send(await deletedetaille_outil_candidatByIdService(id_condidat,id_langue).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};

module.exports = {
    createdetaille_outil_candidatController,
    getAlldetaille_outil_candidatController,
    deletedetaille_outil_candidatController,
    updatedetaille_outil_candidatController,
    getdetaille_outil_candidatByIdController,
    deletedetaille_outil_candidatByIdController
};