//calling database
const res = require("express/lib/response");
const db = require("../db.js");

//function that create a new label of evaluation in table evaluation
const createEvaluationService = (input_label) => {
  //sql query that insert into table evaluation
  let qr_createEvaluation = `INSERT INTO evaluation (libellet) VALUES ('${input_label}')`;

  //promise that will return result after await or return error
  return new Promise((resolve, reject) => {
    db.query(qr_createEvaluation, (result, err) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const getEvaluationService = () => {
  let qr = `select * from evaluation`;
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

const updateEvaluationService = (evaluation_id, input_evaluation) => {
  let qr = `update evaluation set evaluation='${input_evaluation}' where id_evaluation=${evaluation_id}`;
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


const deleteEvaluationService = (evaluation_id)=>{
    let qr=`delete from evaluation where id_evaluation=${evaluation_id}`;
    return new Promise((resolve, reject) => {
        db.query(qr, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
}

//exporting services
module.exports = {
  createEvaluationService,
  getEvaluationService,
  updateEvaluationService,
  deleteEvaluationService
};
