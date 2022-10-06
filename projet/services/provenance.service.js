//calling database
const db = require("../db.js");

//function that create a new label of evaluation in table provenance
const createProvenanceService = (input_label) => {
  //sql query that insert into table evaluation
  let qr_createProvenance = `INSERT INTO provenance (provenance) VALUES ('${input_label}')`;

  //promise that will return result after await or return error
  return new Promise((resolve, reject) => {
    db.query(qr_createProvenance, (result, err) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const getProvenanceService = () => {
  let qr = `select * from provenance`;
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

const updateProvenanceService = (provenance_id, input_provenance) => {
  let qr = `update provenance set provenance='${input_provenance}' where id_provenance=${provenance_id}`;
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


const deleteProvenanceService = (provenance_id)=>{
    let qr=`delete from provenance where id_provenance=${provenance_id}`;
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
  createProvenanceService,
  getProvenanceService,
  updateProvenanceService,
  deleteProvenanceService
};
