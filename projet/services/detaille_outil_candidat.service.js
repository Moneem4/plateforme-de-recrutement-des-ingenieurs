// calling database
const db = require("../db");







const getAlldetaille_outil_candidatService = () => {
  //sql query that will return all qr_getAlldetaille_outil_candidat
  let qr_getAlldetaille_outil_candidat = `SELECT * from detaille_outils_c`;

  //promise that will return resolve (qr_getAlldetaille_outil_candidat) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getAlldetaille_outil_candidat, (err, result) => {
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
const getdetaille_outil_candidatByIdService = (id_condidat,id_outils) => {
  //sql query that will ClientById
  let qr_getdetaille_outil_candidatById = ` 
  select * from detaille_outils_c
where id_condidat=${id_condidat} and id_outils =${id_outils}

    `;

  //promise that will return resolve (ClientById) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getdetaille_outil_candidatById, (err, result) => {
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
const createdetaille_outil_candidatService = (id_condidat,id_outils) => {
  //Sql query that inserts a outils into outils table
  let qr_createdetaille_outil_candidat = `


  INSERT INTO detaille_outils_c
           (id_condidat
           ,id_outils)
     VALUES
           (${id_condidat}
           ,${id_outils})`;

  //Promise that either will return the awaited result or return an error
  return new Promise((resolve, reject) => {
    db.query(qr_createdetaille_outil_candidat, (err, result) => {
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
const updatedetaille_outil_candidatService = (
 id_condidat, id_outils
    
) => {
  //sql query hat will update client
  let qr = `
  UPDATE detaille_outils_c
   SET id_outils =id_outils
   WHERE id_condidat= ${id_condidat} and id_outils= ${id_outils}
  

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
//function that will delete type_detaille_outil_candidat by id
const deletedetaille_outil_candidatService = (id_condidat) => {
  //sql query that will delete type_detaille_outil_candidat by id
  let qr = `
 
  DELETE FROM detaille_outils_c
  WHERE  id_condidat= ${id_condidat} `;
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
const deletedetaille_outil_candidatByIdService = (id_condidat,id_outils) => {
    //sql query that will delete type_detaille_outil_candidat by id
    let qr = `
   
    DELETE FROM detaille_outils_c
    WHERE  id_condidat= ${id_condidat} and id_outils=${id_outils} `;
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
  createdetaille_outil_candidatService,
  getAlldetaille_outil_candidatService,
  deletedetaille_outil_candidatService,
  updatedetaille_outil_candidatService,
  getdetaille_outil_candidatByIdService,
  deletedetaille_outil_candidatByIdService
};
