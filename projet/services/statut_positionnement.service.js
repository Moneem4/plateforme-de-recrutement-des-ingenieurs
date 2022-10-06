// calling database
const db = require("../db.js");

//function that either creates a outil  or returns an error
const createStatutPositionnementService = (input_label) => {
  //Sql query that inserts a StatutPositionnement into StatutPositionnement table
  let qr_createStatutPositionnement = `INSERT INTO statut_positionnement (statut_positionnement) VALUES ('${input_label}')`;

  //Promise that either will return the awaited result or return an error
  return new Promise((resolve, reject) => {
    db.query(qr_createStatutPositionnement, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service", result);
        resolve(result);
      }
    });
  });
};

const getStatutPositionnementService = () => {
  let qr = `select * from statut_positionnement`;
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

const updateStatutPositionnementService = (statut_positionnement_id, input_statut_positionnement) => {
  let qr = `update statut_positionnement set statut_positionnement='${input_statut_positionnement}' where id_statut_positionnement=${statut_positionnement_id}`;
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

const deleteStatutPositionnementService = (statut_positionnement_id) => {
  let qr = `delete from statut_positionnement where id_statut_positionnement=${statut_positionnement_id}`;
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
  createStatutPositionnementService,
  getStatutPositionnementService,
  updateStatutPositionnementService,
  deleteStatutPositionnementService,
};
