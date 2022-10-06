// calling database
const db = require("../db.js");

//function that either creates a Environnement  or returns an error
const createEnvironnementService = (input_label) => {
  //Sql query that inserts a Environnement into Environnement table
  let qr_createEnvironnement = `INSERT INTO environnement (environnement) VALUES ('${input_label}')`;

  //Promise that either will return the awaited result or return an error
  return new Promise((resolve, reject) => {
    db.query(qr_createEnvironnement, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service", result);
        resolve(result);
      }
    });
  });
};

const getEnvironnementService = () => {
  let qr = `select * from environnement`;
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

const updateEnvironnementService = (environnement_id, input_environnement) => {
  let qr = `update environnement set environnement='${input_environnement}' where id_environnement=${environnement_id}`;
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

const deleteEnvironnementService = (environnement_id) => {
  let qr = `delete from environnement where id_environnement=${environnement_id}`;
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
  createEnvironnementService,
  getEnvironnementService,
  updateEnvironnementService,
  deleteEnvironnementService
};
