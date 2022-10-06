//calling service
const {
    getAllEtatClientService,
    getEtatClientByIdService,
    updateEtatClientService,
    deleteEtatClientService
} = require("../services/etat_client.Service");

//****************************************************************************************************************
//function that will user service getAlletatClientService
const getAllEtatClientController = async(req, res) => {

    res.send(await getAllEtatClientService()
        .then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));

};
//****************************************************************************************************************
//getetatCandidat by id
const getEtatClientByIdController = async(req, res) => {
    const id_etat_client = req.params.id;
    res.send(await getEtatClientByIdService(id_etat_client).then(
            (etat_Client) => {
                return etat_Client;
            })
        .catch(err => {
            return console.log(`Error etat_Client: ${err}`);
        }));
};


const updateEtatClientController = async (req, res) => {
    const id_etat_client = req.params.id;
    await updateEtatClientService(id_etat_client).then((response => {
        return response;
    })).catch(err => {
        return console.log(`Error etat_Client: ${err}`);
    });
    res.send('updated etat client');
    };

const deleteEtatClientController = async (req, res) => {
    const id_etat_client = req.params.id;
    await deleteEtatClientService(id_etat_client).then((response => {
        return response;
    })).catch(err => {
        return console.log(`Error etat_Client: ${err}`);
    });
    res.send('deleted etat client');
    };


//*************************************************************************************************************** */

module.exports = {
    getAllEtatClientController,
    getEtatClientByIdController,
    updateEtatClientController,
    deleteEtatClientController
};