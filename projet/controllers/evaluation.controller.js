const res = require("express/lib/response");

//calling service
const { createEvaluationService, getEvaluationService, updateEvaluationService, deleteEvaluationService } = require("../services/evaluation.service");

//function that will return service and take user input to return response (create eavluation) or error
const createEvaluationController = async(req, res) => {
    const input_label = req.body.input_label;

    await createEvaluationService(input_label)
        .then((response) => {
            return response;
        })

    .catch((err) => console.log(`err; ${err}`));

    res.send("evalution created");
};

const getEvaluationController = async (req, res)  => {
    res.send(await getEvaluationService().then((response) => {
        return response;
    })

.catch((err) => console.log(`err; ${err}`)));
};

const updateEvaluationController = async (req, res)=>{
    const id = req.params.id_evaluation;
    const input_evaluation = req.body.input_evaluation;
    await updateEvaluationService(id, input_evaluation).then((response) => {
        return response;
    })
    .catch((err) => console.log(`err; ${err}`));
    res.send('updated evaluation');
};

const deleteEvaluationController = async (req, res) => {
    const id = req.params.id_evaluation;
    await deleteEvaluationService(id).then((response) => {
        return response;
    })
    .catch((err) => console.log(`err; ${err}`));
    res.send('deleted evaluation');
};

module.exports = {
    createEvaluationController, 
    getEvaluationController, 
    updateEvaluationController, 
    deleteEvaluationController
};