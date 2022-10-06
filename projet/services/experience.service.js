// calling database
const db = require("../db.js");

//function that either creates a outil  or returns an error
const createExperienceService = (input_label) => {
  //Sql query that inserts a outils into experience table
  let qr_createExperience = `INSERT INTO experience (experience) VALUES ('${input_label}')`;

  //Promise that either will return the awaited result or return an error
  return new Promise((resolve, reject) => {
    db.query(qr_createExperience, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("experience", result);
        resolve(result);
      }
    });
  });
};

const getExperienceService = () => {
  let qr = `select * from experience`;
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

const updateExperienceService = (experience_id, input_experience) => {
  let qr = `update experience set experience='${input_experience}' where id_experience=${experience_id}`;
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

const deleteExperienceService = (experience_id) => {
  let qr = `delete from experience where id_experience=${experience_id}`;
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
  createExperienceService,
  getExperienceService,
  updateExperienceService,
  deleteExperienceService
};
