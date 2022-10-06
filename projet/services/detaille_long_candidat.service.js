// calling database
const db = require("../db");







const getAlldetaille_long_candidatService = () => {
  //sql query that will return all qr_getAlldetaille_long_candidat
  let qr_getAlldetaille_long_candidat = `select * from detaille_lang_c`;

  //promise that will return resolve (qr_getAlldetaille_long_candidat) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getAlldetaille_long_candidat, (err, result) => {
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
const getdetaille_long_candidatByIdService = (id_condidat) => {
  //sql query that will ClientById
  let qr_getdetaille_long_candidatById = `
  select * from detaille_lang_c 
where id_condidat = ${id_condidat};

  
    `;

  //promise that will return resolve (ClientById) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getdetaille_long_candidatById, (err, result) => {
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
const createdetaille_long_candidatService = (id_condidat,id_langue) => {
  //Sql query that inserts a outils into outils table
  let qr_createdetaille_long_candidat = `

  INSERT INTO detaille_lang_c
           (id_condidat
           ,id_langue)
     VALUES
           (${id_condidat},
           ,${id_langue})`;

  //Promise that either will return the awaited result or return an error
  return new Promise((resolve, reject) => {
    db.query(qr_createdetaille_long_candidat, (err, result) => {
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
const updatedetaille_long_candidatService = (id_condidat,id_langue
) => {
  //sql query hat will update client
  let qr = `

  UPDATE detaille_lang_c SET id_langue= ${id_langue}
 WHERE id_condidat= ${id_condidat} and id_langue= ${id_langue}
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
//function that will delete type_detaille_long_candidat by id
const deletedetaille_long_candidatService = (id_condidat) => {
  //sql query that will delete type_detaille_long_candidat by id
  let qr = `

  DELETE FROM detaille_lang_c
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
const deletedetaille_long_candidatByIdService = (id_condidat,id_langue) => {
    //sql query that will delete type_detaille_long_candidat by id
    let qr = `

    DELETE FROM detaille_lang_c
    WHERE  id_condidat= ${id_condidat} and id_langue=${id_langue} `;
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
  createdetaille_long_candidatService,
  getAlldetaille_long_candidatService,
  deletedetaille_long_candidatService,
  updatedetaille_long_candidatService,
  getdetaille_long_candidatByIdService,
  deletedetaille_long_candidatByIdService
};
