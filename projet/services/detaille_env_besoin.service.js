// calling database
const db = require("../db");







const getAlldetaille_env_besoinService = () => {
  //sql query that will return all qr_getAlldetaille_env_besoin
  let qr_getAlldetaille_env_besoin = `SELECT * FROM detaille_env_besoin`;

  //promise that will return resolve (qr_getAlldetaille_env_besoin) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getAlldetaille_env_besoin, (err, result) => {
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
const getdetaille_env_besoinByIdService = (id_besoin, id_environnement) => {
  //sql query that will ClientById
  let qr_getdetaille_env_besoinById = ` SELECT *
  FROM detaille_env_besoin where id_besoin=${id_besoin} and id_environnement=${id_environnement}

    `;

  //promise that will return resolve (ClientById) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getdetaille_env_besoinById, (err, result) => {
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
const createdetaille_env_besoinService = (id_environnement,id_besoin) => {
  //Sql query that inserts a outils into outils table
  let qr_createdetaille_env_besoin = `
  INSERT INTO detaille_env_besoin (id_environnement,id_besoin) VALUES  (${id_environnement}  ,${id_besoin})`;

  //Promise that either will return the awaited result or return an error
  return new Promise((resolve, reject) => {
    db.query(qr_createdetaille_env_besoin, (err, result) => {
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
const updatedetaille_env_besoinService = (
    id_environnement,
    id_besoin
) => {
  //sql query hat will update client
  let qr = `UPDATE detaille_env_besoin
  SET id_environnement= ${id_environnement}
     ,id_besoin = ${id_besoin}
WHERE id_besoin=${id_besoin} and id_environnement=${id_environnement}
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
//function that will delete type_detaille_env_besoin by id
const deletedetaille_env_besoinService = (id_besoin) => {
  //sql query that will delete type_detaille_env_besoin by id
  let qr = `DELETE FROM detaille_env_besoin
  WHERE id_besoin=${id_besoin} `;
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
const deletedetaille_env_besoinByIdService = (id_besoin,id_environnement) => {
    //sql query that will delete type_detaille_env_besoin by id
    let qr = `DELETE FROM detaille_env_besoin
    WHERE id_besoin=${id_besoin} and id_environnement=${id_environnement} `;
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
  createdetaille_env_besoinService,
  getAlldetaille_env_besoinService,
  deletedetaille_env_besoinService,
  updatedetaille_env_besoinService,
  getdetaille_env_besoinByIdService,
  deletedetaille_env_besoinByIdService
};
