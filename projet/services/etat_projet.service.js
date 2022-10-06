//calling batabase
const db = require("../db.js");

//*********************************************************************************** */

//function that will return allSociete from table EtatClient
const getAllEtatProjetService = () => {
    let qr_AllEtatProjet = `SELECT * FROM etat_projet`;

    //query that will resolve(allEtatProjet) or reject(err)
    return new Promise((resolve, reject) => {
        db.query(qr_AllEtatProjet, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("service", result);
                resolve(result);
            }
        });
    });
};

//*********************************************************************************** */
//function that will return EtatProjetById from table Etat Projet
const getEtatProjetByIdService = (id) => {
    let qr_EtatProjetById = `SELECT * FROM etat_projet
    where etat_projet.id_etat_projet = ${id}`;

    //query that will resolve(EtatProjetById) or reject(err)
    return new Promise((resolve, reject) => {
        db.query(qr_EtatProjetById, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("service", result);
                resolve(result);
            }
        });
    });
};


const updateEtatProjetService = (id, input_etat_Projet) => {
    let qr=`update etat_projet set etat_projet ='${input_etat_projet}' where id_etat_projet=${id}`
    return new Promise((resolve, reject) => {
        db.query(qr, (err, result)=> {
            if (err) {
                reject(err);
            } else {
                console.log("service", result);
                resolve(result);
            }
        })
    })
} 

const deleteEtatProjetService = (id) => {
    let qr = `delete from etat_projet where id_etat_projet=${id}`
    return new Promise((resolve, reject) => {
        db.query(qr, (err, result)=> {
            if (err) {
                reject(err);
            } else {
                console.log("service", result);
                resolve(result);
            }
        })
    })
}

//exporting services
module.exports = {
    getAllEtatProjetService,
    getEtatProjetByIdService,
    updateEtatProjetService,
    deleteEtatProjetService
};