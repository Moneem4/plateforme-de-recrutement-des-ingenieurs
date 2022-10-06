// calling database
const db = require("../db.js");

//function that either creates a outil  or returns an error
const createDisponibiliteService = (input_label) => {
  //Sql query that inserts a outils into outils table
  let qr_createDisponibilite = `INSERT INTO disponibilite (disponibilite) VALUES ('${input_label}')`;

  //Promise that either will return the awaited result or return an error
  return new Promise((resolve, reject) => {
    db.query(qr_createDisponibilite, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("Disponibilite", result);
        resolve(result);
      }
    });
  });
};

const getDisponibiliteService = () => {
  let qr = `select * from disponibilite`;
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

const updateDisponibiliteService = (disp_id, input_disp) => {
  let qr = `update disponibilite set disponibilite='${input_disp}' where id_disponibilite=${disp_id}`;
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

const deleteDisponibiliteService = (disp_id) => {
  let qr = `delete from disponibilite where id_disponibilite=${disp_id}`;
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
  createDisponibiliteService,
  getDisponibiliteService,
  updateDisponibiliteService,
  deleteDisponibiliteService,
};
