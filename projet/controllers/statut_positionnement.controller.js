const res = require("express/lib/response");

//calling service
const { 
    createStatutPositionnementService,
    getStatutPositionnementService,
    updateStatutPositionnementService,
    deleteStatutPositionnementService,
 } = require("../services/statut_positionnement.service");

//function that will return service and take user input to return response (create eavluation) or error
const createStatutPositionnementController = async(req, res) => {
    const input_label = req.body.input_label;

    await createStatutPositionnementService(input_label)
        .then((response) => {
            return response;
        })

    .catch((err) => console.log(`err; ${err}`));

    res.send("statut_positionnement created");
};

const getStatutPositionnementController = async (req, res) => {
    res.send(await getStatutPositionnementService().then((response) => {
        return response;
    })

.catch((err) => console.log(`err; ${err}`)));
};

const updateStatutPositionnementController = async (req, res)=>{
    const id = req.params.id_statut_positionnement;
    const input_statut_positionnement = req.body.input_statut_positionnement;
    await updateStatutPositionnementService(id, input_statut_positionnement).then((response) => {
        return response;
    })
    .catch((err) => console.log(`err; ${err}`));
    res.send('updated StatutPositionnement');
};

const deleteStatutPositionnementController = async (req, res) => {
    const id = req.params.id_statut_positionnement;
    await deleteStatutPositionnementService(id).then((response) => {
        return response;
    })
    .catch((err) => console.log(`err; ${err}`));
    res.send('deleted StatutPositionnement');
};

module.exports = {
    createStatutPositionnementController, 
    getStatutPositionnementController, 
    updateStatutPositionnementController, 
    deleteStatutPositionnementController
};