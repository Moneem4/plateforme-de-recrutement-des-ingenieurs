
    //calling service
const {
    getAllEtatProjetService,
    getEtatProjetByIdService,
    updateEtatProjetService,
    deleteEtatProjetService
} = require("../services/etat_projet.service");

//****************************************************************************************************************
//function that will user service getAlletatClientService
const getAllEtatProjetController = async(req, res) => {

    res.send(await getAllEtatProjetService()
        .then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));

};
//****************************************************************************************************************
//getetatCandidat by id
const getEtatProjetByIdController = async(req, res) => {
    const id_etat_projet = req.params.id;
    res.send(await getEtatProjetByIdService(id_etat_projet).then(
            (etat_projet) => {
                return etat_projet;
            })
        .catch(err => {
            return console.log(`Error etat_projet: ${err}`);
        }));
};


const updateEtatProjetController = async (req, res) => {
    const id_etat_projet = req.params.id;
    await updateEtatProjetService(id_etat_projet).then((response => {
        return response;
    })).catch(err => {
        return console.log(`Error etat_projet: ${err}`);
    });
    res.send('updated etat projet');
    };

const deleteEtatProjetController = async (req, res) => {
    const id_etat_projet = req.params.id;
    await deleteEtatProjetService(id_etat_projet).then((response => {
        return response;
    })).catch(err => {
        return console.log(`Error etat_projet: ${err}`);
    });
    res.send('deleted etat projet');
    };


//*************************************************************************************************************** */

module.exports = {
    getAllEtatProjetController,
    getEtatProjetByIdController,
    updateEtatProjetController,
    deleteEtatProjetController
};