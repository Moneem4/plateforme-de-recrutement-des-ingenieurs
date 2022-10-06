//callin service
const {createdetaille_long_besoinService
    ,getAlldetaille_long_besoinService,
    deletedetaille_long_besoinService,
    updatedetaille_long_besoinService,
    getdetaille_long_besoinByIdService,
    deletedetaille_long_besoinByIdService } = require("../services/detaille_long_besoin.service");
//function that will use service and the input user in order to  return result (create new outils) or error 



const getAlldetaille_long_besoinController = async (req, res) => {
    //sql query that will return all qr_getAlldetaille_long_besoin

    //promise that will return resolve (qr_getAlldetaille_long_besoin) or reject error
    res.send(await getAlldetaille_long_besoinService()
        .then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};
//get by id
const getdetaille_long_besoinByIdController = async(req, res) => {
    const id_besoin = req.params.id_besoin;
    const id_langue = req.params.id_langue;

    
    res.send(await getdetaille_long_besoinByIdService(id_besoin,id_langue).then((b) => {
        return b;
    }).catch(err => {
        return console.log(`Error: ${err}`);
    }));
};

//creation de detaille_long_besoin
const createdetaille_long_besoinController = async(req, res) => {
    const id_langue = req.body.id_langue;
    const id_besoin = req.body.id_besoin;


    await createdetaille_long_besoinService(id_besoin,id_langue)
        .then((response) => {
            console.log("controller result", response);
            return response;
        })
        .catch((err) =>
            console.log(`erreur: ${err}`));

    res.send("detaille_long_besoin created");


};
//update
const updatedetaille_long_besoinController = async(req, res) => {
   
    const id_langue = req.body.id_langue;
    const id_besoin = req.body.id_besoin;


    res.send(
        await updatedetaille_long_besoinService(       id_besoin,id_langue  ).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`))
    );
};
//delete
const deletedetaille_long_besoinController = async(req, res) => {
    let id_besoin = req.params.id_besoin;
    res.send(await deletedetaille_long_besoinService(id_besoin).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};
//delete by id
const deletedetaille_long_besoinByIdController = async(req, res) => {
    const id_langue = req.params.id_langue;
    const id_besoin = req.params.id_besoin;
    res.send(await deletedetaille_long_besoinByIdService(id_besoin,id_langue).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};

module.exports = {
    createdetaille_long_besoinController,
    getAlldetaille_long_besoinController,
    deletedetaille_long_besoinController,
    updatedetaille_long_besoinController,
    getdetaille_long_besoinByIdController,
    deletedetaille_long_besoinByIdController
};