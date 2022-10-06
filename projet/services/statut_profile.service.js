// calling database
const db = require("../db.js");

//function that either creates a outil  or returns an error
const createStatutProfileService = (input_label) => {
  //Sql query that inserts a StatutProfile into StatutProfile table
  let qr_createStatutProfile = `INSERT INTO statut_profile (statut_profile) VALUES ('${input_label}')`;

  //Promise that either will return the awaited result or return an error
  return new Promise((resolve, reject) => {
    db.query(qr_createStatutProfile, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service", result);
        resolve(result);
      }
    });
  });
};

const getStatutProfileService = () => {
  let qr = `select * from statut_profile`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const updateStatutProfileService = (StatutProfile_id, input_StatutProfile) => {
  let qr = `update statut_profile set statut_profile='${input_StatutProfile}' where id_statut_profile=${StatutProfile_id}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const deleteStatutProfileService = (StatutProfile_id) => {
  let qr = `delete from statut_profile where id_statut_profile=${StatutProfile_id}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

//exporting services
module.exports = {
  createStatutProfileService,
  getStatutProfileService,
  updateStatutProfileService,
  deleteStatutProfileService
};
