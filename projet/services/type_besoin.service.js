// calling database
const db = require("../db.js");

//function that either creates a outil  or returns an error
const createTypeBesoinService = (input_label) => {
  //Sql query that inserts a StatutBesoin into StatutBesoin table
  let qr_createStatutBesoin = `INSERT INTO type_besoin (type_besoin) VALUES ('${input_label}')`;

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

const getTypeBesoinService = () => {
  let qr = `select * from type_besoin`;
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

const updateTypeBesoinService = (StatutBesoin_id, input_StatutBesoin) => {
  let qr = `update type_besoin set type_besoin='${input_StatutBesoin}' where id_type_besoin=${StatutBesoin_id}`;
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

const deleteTypeBesoinService = (StatutBesoin_id) => {
  let qr = `delete from type_besoin where id_type_besoin=${StatutBesoin_id}`;
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
  createTypeBesoinService,
  getTypeBesoinService,
  updateTypeBesoinService,
  deleteTypeBesoinService,
};
