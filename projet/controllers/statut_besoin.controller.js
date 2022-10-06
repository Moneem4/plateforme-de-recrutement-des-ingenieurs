
//calling service
const { createStatutBesoinService, getStatutBesoinService, updateStatutBesoinService, deleteStatutBesoinService } = require("../services/statut_besoin.service");

//function that will return service and take user input to return response (create eavluation) or error
const createStatutBesoinController = async(req, res) => {
    const input_label = req.body.input_label;

    await createStatutBesoinService(input_label)
        .then((response) => {
            return response;
        })

    .catch((err) => console.log(`err; ${err}`));

    res.send("statut besoin created");
};

const getStatutBesoinController = async (req, res) => {
    res.send(await getStatutBesoinService().then((response) => {
        return response;
    })

.catch((err) => console.log(`err; ${err}`)));
};

const updateStatutBesoinController = async (req, res)=>{
    const id = req.params.id_statut_besoin;
    const input_statut_besoin = req.body.input_statut_besoin;
    await updateStatutBesoinService(id, input_statut_besoin).then((response) => {
        return response;
    })
    .catch((err) => console.log(`err; ${err}`));
    res.send('updated StatutBesoin');
};

const deleteStatutBesoinController = async (req, res) => {
    const id = req.params.id_statut_besoin;
    await deleteStatutBesoinService(id).then((response) => {
        return response;
    })
    .catch((err) => console.log(`err; ${err}`));
    res.send('deleted StatutBesoin');
};

module.exports = {
    createStatutBesoinController, 
    getStatutBesoinController, 
    updateStatutBesoinController, 
    deleteStatutBesoinController
};