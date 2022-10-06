// calling database
const db = require("../db.js");

//function that either creates a outil  or returns an error
const createDomaineService = (input_label) => {
  //Sql query that inserts a outils into Domaine table
  let qr_createDomaine = `INSERT INTO domaine (domaine) VALUES ('${input_label}')`;

  //Promise that either will return the awaited result or return an error
  return new Promise((resolve, reject) => {
    db.query(qr_createDomaine, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("Domaine", result);
        resolve(result);
      }
    });
  });
};

const getDomaineService = () => {
  let qr = `select * from domaine`;
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

const updateDomaineService = (domaine_id, input_domaine) => {
  let qr = `update domaine set domaine='${input_domaine}' where id_domaine=${domaine_id}`;
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

const deleteDomaineService = (domaine_id) => {
  let qr = `delete from domaine where domaine=${domaine_id}`;
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
  createDomaineService,
  getDomaineService,
  updateDomaineService,
  deleteDomaineService
};
