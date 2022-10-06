// calling database
const res = require("express/lib/response");
const db = require("../db.js");

//function that either creates a outil  or returns an error
const createOutilsService = (input_label) => {
  //Sql query that inserts a outils into outils table
  let qr_createOutils = `INSERT INTO outils (outils) VALUES ('${input_label}')`;

  //Promise that either will return the awaited result or return an error
  return new Promise((resolve, reject) => {
    db.query(qr_createOutils, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service", result);
        resolve(result);
      }
    });
  });
};

const getOutilsService = () => {
  let qr = `select * from outils`;
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

const updateOutilsService = (outils_id, input_outils) => {
  let qr = `update outils set outils='${input_outils}' where id_outils=${outils_id}`;
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

const deleteOutilsService = (outils_id) => {
  let qr = `delete from outils where id_outils=${outils_id}`;
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
  createOutilsService,
  getOutilsService,
  updateOutilsService,
  deleteOutilsService,
};
