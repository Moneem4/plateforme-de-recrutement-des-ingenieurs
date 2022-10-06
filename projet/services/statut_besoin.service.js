// calling database
const db = require("../db.js");

//function that either creates a outil  or returns an error
const createStatutBesoinService = (input_label) => {
  //Sql query that inserts a StatutBesoin into StatutBesoin table
  let qr_createStatutBesoin = `INSERT INTO statut_besoin (statut_besoin) VALUES ('${input_label}')`;

  //Promise that either will return the awaited result or return an error
  return new Promise((resolve, reject) => {
    db.query(qr_createStatutBesoin, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service", result);
        resolve(result);
      }
    });
  });
};

const getStatutBesoinService = () => {
  let qr = `select * from statut_besoin`;
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

const updateStatutBesoinService = (StatutBesoin_id, input_StatutBesoin) => {
  let qr = `update statut_besoin set statut_besoin='${input_StatutBesoin}' where id_statut_besoin=${StatutBesoin_id}`;
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

const deleteStatutBesoinService = (StatutBesoin_id) => {
  let qr = `delete from statut_besoin where id_statut_besoin=${StatutBesoin_id}`;
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
  createStatutBesoinService,
  getStatutBesoinService,
  updateStatutBesoinService,
  deleteStatutBesoinService,
};
