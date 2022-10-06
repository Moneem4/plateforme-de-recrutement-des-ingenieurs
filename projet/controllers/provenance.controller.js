const res = require("express/lib/response");

//calling service
const { createProvenanceService, getProvenanceService, updateProvenanceService, deleteProvenanceService } = require("../services/provenance.service");

//function that will return service and take user input to return response (create eavluation) or error
const createProvenanceController = async(req, res) => {
    const input_label = req.body.input_label;

    await createProvenanceService(input_label)
        .then((response) => {
            return response;
        })

    .catch((err) => console.log(`err; ${err}`));

    res.send("evalution created");
};

const getProvenanceController =async (req, res) => {
    res.send(await getProvenanceService()
    .then((response) => {
        return response;
    })

    .catch((err) => console.log(`err; ${err}`))
    );
};

const updateProvenanceController = async (req, res)=>{
    const id = req.params.id_provenance;
    const input_provenance = req.body.input_provenance;
    await updateProvenanceService(id, input_provenance).then((response) => {
        return response;
    })
    .catch((err) => console.log(`err; ${err}`));
    res.send('updated provenance');
};

const deleteProvenanceController = async (req, res) => {
    const id = req.params.id_provenance;
    await deleteProvenanceService(id).then((response) => {
        return response;
    })
    .catch((err) => console.log(`err; ${err}`));
    res.send('deleted provenance');
};

module.exports = {
    createProvenanceController, 
    getProvenanceController, 
    updateProvenanceController, 
    deleteProvenanceController
};