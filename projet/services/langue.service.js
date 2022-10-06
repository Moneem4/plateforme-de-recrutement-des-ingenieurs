// calling database
const db = require("../db.js");

//function that either creates a outil  or returns an error
const createLangueService = (input_label) => {
  //Sql query that inserts a outils into outils table
  let qr_createLangue = `INSERT INTO langue (langue) VALUES ('${input_label}')`;

  //Promise that either will return the awaited result or return an error
  return new Promise((resolve, reject) => {
    db.query(qr_createLangue, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("langue", result);
        resolve(result);
      }
    });
  });
};

const getLangueService = () => {
  let qr = `select * from langue`;
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

const updateLangueService = (langue_id, input_langue) => {
  let qr = `update langue set langue='${input_langue}' where id_langue=${langue_id}`;
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

const deleteLangueService = (langue_id) => {
  let qr = `delete from langue where id_langue=${langue_id}`;
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
  createLangueService,
  getLangueService,
  updateLangueService,
  deleteLangueService
};
