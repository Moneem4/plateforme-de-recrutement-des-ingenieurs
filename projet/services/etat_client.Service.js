//calling batabase
const res = require("express/lib/response");
const db = require("../db.js");

//*********************************************************************************** */

//function that will return allSociete from table EtatClient
const getAllEtatClientService = () => {
    let qr_AllEtatClient = `SELECT * FROM etat_client`;

    //query that will resolve(allEtatClient) or reject(err)
    return new Promise((resolve, reject) => {
        db.query(qr_AllEtatClient, (err, result) => {
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
//function that will return EtatClienById from table Etat client
const getEtatClientByIdService = (id) => {
    let qr_EtatClientById = `SELECT * FROM etat_client
    where etat_client.id_etat_client = ${id}`;

    //query that will resolve(EtatClientById) or reject(err)
    return new Promise((resolve, reject) => {
        db.query(qr_EtatClientById, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("service", result);
                resolve(result);
            }
        });
    });
};


const updateEtatClientService = (id, input_etat_client) => {
    let qr=`update etat_client set etat_client ='${input_etat_client}' where id_etat_client=${id}`
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

const deleteEtatClientService = (id) => {
    let qr = `delete from etat_client where id_etat_client=${id}`
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
    getAllEtatClientService,
    getEtatClientByIdService,
    updateEtatClientService,
    deleteEtatClientService
};