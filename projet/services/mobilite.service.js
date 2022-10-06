// calling database
const res = require("express/lib/response");
const db = require("../db.js");

//function that either creates a outil  or returns an error
const createMobiliteService = (input_label) => {
  //Sql query that inserts a outils into outils table
  let qr_createMobilite = `INSERT INTO mobilite (mobilite) VALUES ('${input_label}')`;

  //Promise that either will return the awaited result or return an error
  return new Promise((resolve, reject) => {
    db.query(qr_createMobilite, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service", result);
        resolve(result);
      }
    });
  });
};

const getMobiliteService = () => {
  let qr = `select * from mobilite`;
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

const updateMobiliteService = (mobilite_id, input_mobilite) => {
  let qr = `update mobilite set mobilite='${input_mobilite}' where id_mobilite=${mobilite_id}`;
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

const deleteMobiliteService = (mobilite_id) => {
  let qr = `delete from mobilite where mobilite=${mobilite_id}`;
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
  createMobiliteService,
  getMobiliteService,
  updateMobiliteService,
  deleteMobiliteService
};
