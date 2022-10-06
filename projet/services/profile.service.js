// calling database
const db = require("../db");
const getAllProfileService = () => {
    //sql query that will return all qr_getAllProfile
    let qr_getAllProfile = `SELECT * from type_profile`;

    //promise that will return resolve (qr_getAllProfile) or reject error
    return new Promise((resolve, reject) => {
        db.query(qr_getAllProfile, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("service:", result);
                resolve(result);
            }
        });
    });
};
//get by id
const getProfileByIdService = (id_profile) => {
    //sql query that will ClientById
    let qr_getProfileById = `SELECT id_profile,profile FROM type_profile where id_profile= ${id_profile}
    `;

    //promise that will return resolve (ClientById) or reject error
    return new Promise((resolve, reject) => {
        db.query(qr_getProfileById, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("service:", result);
                resolve(result);
            }
        });
    });
};
//function that either creates a outil  or returns an error
const createProfileService = (profile) => {
    
    //Sql query that inserts a outils into outils table
    let qr_createProfile = `INSERT INTO type_profile (profile) VALUES ('${profile}')`;

    //Promise that either will return the awaited result or return an error
    return new Promise((resolve, reject) => {
        db.query(qr_createProfile, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("service", result);
                resolve(result);
            }
        });

    });
};

//exporting services
const updateProfileService = (id_profile,profile ) => {
    //sql query hat will update client
    let qr = `update type_profile 
    set id_profile=${id_profile},profile='${profile}' where id_profile=${id_profile}
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
//function that will delete type_profile by id
const deleteProfileService = (id_profile) => {
    //sql query that will delete type_profile by id
    let qr = `delete from type_profile where id_profile = ${id_profile} `;
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
module.exports = {createProfileService,getAllProfileService,deleteProfileService,updateProfileService,getProfileByIdService};