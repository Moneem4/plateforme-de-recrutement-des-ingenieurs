// calling database
const db = require("../db");







const getAlldetaille_outil_besoinService = () => {
  //sql query that will return all qr_getAlldetaille_outil_besoin
  let qr_getAlldetaille_outil_besoin = `select * from detaille_env_besoin`;

  //promise that will return resolve (qr_getAlldetaille_outil_besoin) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getAlldetaille_outil_besoin, (err, result) => {
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
const getdetaille_outil_besoinByIdService = (id_besoin) => {
  //sql query that will ClientById
  let qr_getdetaille_outil_besoinById = ` select * from detaille_env_besoin where id_besoin=${id_besoin};
    `;

  //promise that will return resolve (ClientById) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getdetaille_outil_besoinById, (err, result) => {
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
const createdetaille_outil_besoinService = (id_besoin,id_outils) => {
  //Sql query that inserts a outils into outils table
  let qr_createdetaille_outil_besoin = `
  INSERT INTO detaille_outils_b
           (id_besoin
           ,id_outils)
     VALUES
           (${id_besoin}
           ,${id_outils})`;

  //Promise that either will return the awaited result or return an error
  return new Promise((resolve, reject) => {
    db.query(qr_createdetaille_outil_besoin, (err, result) => {
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
const updatedetaille_outil_besoinService = (
  id_langue,
    id_besoin
) => {
  //sql query hat will update client
  let qr = `UPDATE detaille_lang_b SET id_outils= ${id_outils}
 WHERE id_besoin= ${id_besoin} and id_outils= ${id_outils}
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
//function that will delete type_detaille_outil_besoin by id
const deletedetaille_outil_besoinService = (id_besoin) => {
  //sql query that will delete type_detaille_outil_besoin by id
  let qr = `DELETE FROM detaille_lang_b
  WHERE  id_besoin= ${id_besoin} `;
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
const deletedetaille_outil_besoinByIdService = (id_besoin,id_outils) => {
    //sql query that will delete type_detaille_outil_besoin by id
    let qr = `DELETE FROM detaille_lang_b
    WHERE  id_besoin= ${id_besoin} and id_outils=${id_outils} `;
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
  createdetaille_outil_besoinService,
  getAlldetaille_outil_besoinService,
  deletedetaille_outil_besoinService,
  updatedetaille_outil_besoinService,
  getdetaille_outil_besoinByIdService,
  deletedetaille_outil_besoinByIdService
};
