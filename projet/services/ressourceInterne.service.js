//callin data base
const res = require("express/lib/response");
const db = require("../db");

//*********************************************************************************** */

//function that will return allRessource or return error
const getAllRessourceService = () => {
    //sql query that will return all ressource
    let qr_getAllRessource = `select * from ressource where id_profile=3;`;

    //promise that will return resolve (allRessource) or reject error
    return new Promise((resolve, reject) => {
        db.query(qr_getAllRessource, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("service:", result);
                resolve(result);
            }
        });
    });
};
//*********************************************************************************** */

//function that will return allRessource or return error
const getDetailleRessourceService = (id_ressource) => {
    //sql query that will return all ressource
    let qr_getAllRessource = `select titre, nom, prenom, date_de_naissance, email, telephone, adress, ville, code_postal, 
    pays,pro.provenance,
    statut.statut_profile,
    Tprofil.profile,
    Tprofil.id_profile
    from ressource  res,
    provenance pro,
    statut_profile statut,
    type_profile Tprofil
    where res.id_provenance=pro.id_provenance 
    and res.id_profile=Tprofil.id_profile
    and res.id_statut_profile=statut.id_statut_profile and Tprofil.id_profile=3 and id_ressource = ${id_ressource} ;`;

    //promise that will return resolve (allRessource) or reject error
    return new Promise((resolve, reject) => {
        db.query(qr_getAllRessource, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("service:", result);
                resolve(result);
            }
        });
    });
};

//*********************************************************************************** */

//function that will return RessourceById or return error
const getRessourceByIdService = (id_ressource) => {
    //sql query that will return RessourceById
    let qr_getRessourceById = `select titre, nom, prenom, date_de_naissance, email, telephone, adress, ville, code_postal, 
    pays,id_provenance, id_statut_profile,id_profile from ressource where  id_ressource = ${id_ressource} `;

    //promise that will return resolve (RessourceById) or reject error
    return new Promise((resolve, reject) => {
        db.query(qr_getRessourceById, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("service:", result);
                resolve(result);
            }
        });
    });
};
//*********************************************************************************** */
//function that will create a new ressource  or return error
const createRessourceService = (
    newCondidat_titre,
    newCondidat_nom,
    newCondidat_prenom,
    newCondidat_date_de_naissance,
    newCondidat_email,
    newCondidat_telephonne,
    newCondidat_adress,
    newCondidat_ville,
    newCondidat_code_postal,
    newCondidat_pays,
    newCondidat_provenance,
    newCondidat_statut_profile,
    newCondidat_profile,
    num_piece_ident,
   
) => {
    //sql query that will create a new ressource
    let qr = `insert into ressource
    (titre, nom, prenom, date_de_naissance, email, telephone, adress, ville, code_postal, 
        pays,id_provenance, id_statut_profile,id_profile,num_piece_ident)
    values('${newCondidat_titre}', '${newCondidat_nom}', '${newCondidat_prenom}', ${newCondidat_date_de_naissance},'${newCondidat_email}', '${newCondidat_telephonne}','${newCondidat_adress}', '${newCondidat_ville}', ${newCondidat_code_postal},'${newCondidat_pays}',${newCondidat_provenance},${newCondidat_statut_profile},${newCondidat_profile},${num_piece_ident} )`;
    //promise that will return resolve (if ressource is created ) or reject error
    return new Promise((resolve, reject) => {
        console.log('req',qr);
        db.query(qr, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("service:", result);
                resolve(result);
            }
        });
    });
};

//*********************************************************************************** */
//function that will update a  ressource  or return error
const updateRessourceService = (
    id_ressource,
    newCondidat_titre,
    newCondidat_nom,
    newCondidat_prenom,
    newCondidat_date_de_naissance,
    newCondidat_email,
    newCondidat_telephonne,
    newCondidat_adress,
    newCondidat_ville,
    newCondidat_code_postal,
    newCondidat_pays,
    newCondidat_provenance,
    newCondidat_statut_profile,
    newCondidat_profile,
   
) => {
    //sql query hat will update ressource
    let qr = `update ressource set 
   titre='${newCondidat_titre}',nom='${newCondidat_nom}', prenom='${newCondidat_prenom}',
   date_de_naissance='${newCondidat_date_de_naissance}', email='${newCondidat_email}', 
    telephone='${newCondidat_telephonne}', adress='${newCondidat_adress}', ville='${newCondidat_ville}',
    code_postal=${newCondidat_code_postal}, pays='${newCondidat_pays}',
    id_provenance=${newCondidat_provenance},id_statut_profile=${newCondidat_statut_profile}, id_profile=${newCondidat_profile} where id_ressource=${id_ressource}
    `;

    //promise that will return resolve or err
    return new Promise((resolve, reject) => {
        db.query(qr, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("service:", result);
                resolve(result);
            }
        });
    });
};

//*********************************************************************************** */
//function that will delete ressource by id
const deleteRessourcetService = (id_ressource) => {
    //sql query that will delete ressource by id
    let qr = `
        delete from ressource where id_ressource = ${id_ressource} `;
    //promise that will retur resolve or err
    return new Promise((resolve, reject) => {
        db.query(qr, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("service:", result);
                resolve(result);
            }
        });
    });
};

//*********************************************************************************** */

//exporting service
module.exports = {
    getAllRessourceService,
    getRessourceByIdService,
    createRessourceService,
    updateRessourceService,
    deleteRessourcetService,
    getDetailleRessourceService,
};