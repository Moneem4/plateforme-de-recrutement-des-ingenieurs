// calling database
const db = require("../db.js");

//function that either creates a outil  or returns an error
const createTypeProfileService = (input_label) => {
  //Sql query that inserts a TypeProfile into TypeProfile table
  let qr_createTypeProfile = `INSERT INTO type_profile (profile) VALUES ('${input_label}')`;

  //Promise that either will return the awaited result or return an error
  return new Promise((resolve, reject) => {
    db.query(qr_createTypeProfile, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service", result);
        resolve(result);
      }
    });
  });
};

const getTypeProfileService = () => {
  let qr = `select * from type_profile`;
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

const updateTypeProfileService = (TypeProfile_id, input_TypeProfile) => {
  let qr = `update type_profile set profile='${input_TypeProfile}' where id_profile=${TypeProfile_id}`;
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

const deleteTypeProfileService = (TypeProfile_id) => {
  let qr = `delete from type_profile where id_profile=${TypeProfile_id}`;
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
  createTypeProfileService,
  getTypeProfileService,
  updateTypeProfileService,
  deleteTypeProfileService,
};
