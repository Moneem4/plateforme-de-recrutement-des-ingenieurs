// calling database
const db = require("../db");

const getAlldetaille_long_besoinService = () => {
  //sql query that will return all qr_getAlldetaille_long_besoin
  let qr_getAlldetaille_long_besoin = `select * from detaille_env_besoin`;

  //promise that will return resolve (qr_getAlldetaille_long_besoin) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getAlldetaille_long_besoin, (err, result) => {
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
const getdetaille_long_besoinByIdService = (id_besoin) => {
  //sql query that will ClientById
  let qr_getdetaille_long_besoinById = ` select * from detaille_env_besoin where id_besoin=${id_besoin};
    `;

  //promise that will return resolve (ClientById) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getdetaille_long_besoinById, (err, result) => {
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
const createdetaille_long_besoinService = (id_besoin,id_langue) => {
  //Sql query that inserts a outils into outils table
  let qr_createdetaille_long_besoin = `
  INSERT INTO detaille_lang_b
           (id_besoin
           ,id_langue)
     VALUES
           (${id_besoin},
           ,${id_langue})`;

  //Promise that either will return the awaited result or return an error
  return new Promise((resolve, reject) => {
    db.query(qr_createdetaille_long_besoin, (err, result) => {
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
const updatedetaille_long_besoinService = (
  id_langue,
    id_besoin
) => {
  //sql query hat will update client
  let qr = `UPDATE detaille_lang_b SET id_langue= ${id_langue}
 WHERE id_besoin= ${id_besoin} and id_langue= ${id_langue}
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
//function that will delete type_detaille_long_besoin by id
const deletedetaille_long_besoinService = (id_besoin) => {
  //sql query that will delete type_detaille_long_besoin by id
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
const deletedetaille_long_besoinByIdService = (id_besoin,id_langue) => {
    //sql query that will delete type_detaille_long_besoin by id
    let qr = `DELETE FROM detaille_lang_b
    WHERE  id_besoin= ${id_besoin} and id_langue=${id_langue} `;
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
  createdetaille_long_besoinService,
  getAlldetaille_long_besoinService,
  deletedetaille_long_besoinService,
  updatedetaille_long_besoinService,
  getdetaille_long_besoinByIdService,
  deletedetaille_long_besoinByIdService
};
