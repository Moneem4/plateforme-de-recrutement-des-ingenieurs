// calling database
const db = require("../db");

const getAlldetaille_env_candidatService = () => {
  //sql query that will return all qr_getAlldetaille_env_candidat
  let qr_getAlldetaille_env_candidat = `select * from detaille_env_candidat`;

  //promise that will return resolve (qr_getAlldetaille_env_candidat) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getAlldetaille_env_candidat, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service:", result);
        resolve(result);
      }
    });
  });
};
//get by id
const getdetaille_env_candidatByIdService = (id_condidat, id_environnement) => {
  //sql query that will ClientById
  let qr_getdetaille_env_candidatById = `

  SELECT *
  FROM detaille_env_candidat where id_condidat=${id_condidat} and id_environnement=${id_environnement}

    `;

  //promise that will return resolve (ClientById) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getdetaille_env_candidatById, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service:", result);
        resolve(result);
      }
    });
  });
};
//function that either creates a outil  or returns an error
const createdetaille_env_candidatService = (id_condidat ,id_environnement) => {
  //Sql query that inserts a outils into outils table
  let qr_createdetaille_env_candidat = `
  INSERT INTO detaille_env_candidat
           (id_environnement
           ,id_condidat)
     VALUES
           (${id_environnement}  ,${id_condidat}
          )
  
  `;

  //Promise that either will return the awaited result or return an error
  return new Promise((resolve, reject) => {
    db.query(qr_createdetaille_env_candidat, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service", result);
        resolve(result);
      }
    });
  });
};

//exporting services
const updatedetaille_env_candidatService = (id_condidat,    id_environnement
    
) => {
  //sql query hat will update client
  let qr = `
  UPDATE detaille_env_candidat
   SET id_environnement= ${id_environnement}   
   WHERE id_condidat=${id_condidat} and id_environnement=${id_environnement}
`;

  //promise that will return resolve or err
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service:", result);
        resolve(result);
      }
    });
  });
};

//*********************************************************************************** */
//function that will delete type_detaille_env_candidat by id
const deletedetaille_env_candidatService = (id_condidat) => {
  //sql query that will delete type_detaille_env_candidat by id
  let qr = `

  DELETE FROM detaille_env_candidat
  WHERE id_condidat=${id_condidat} `;
  //promise that will retur resolve or err
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service:", result);
        resolve(result);
      }
    });
  });
};
//delete by id
const deletedetaille_env_candidatByIdService = (id_condidat,id_environnement) => {
    //sql query that will delete type_detaille_env_candidat by id
    let qr = `
  

    DELETE FROM detaille_env_candidat
    WHERE id_condidat=${id_condidat} and id_environnement=${id_environnement} `;
    //promise that will retur resolve or err
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        if (err) {
          reject(err);
        } else {
          console.log("service:", result);
          resolve(result);
        }
      });
    });
  };
module.exports = {
  createdetaille_env_candidatService,
  getAlldetaille_env_candidatService,
  deletedetaille_env_candidatService,
  updatedetaille_env_candidatService,
  getdetaille_env_candidatByIdService,
  deletedetaille_env_candidatByIdService
};
