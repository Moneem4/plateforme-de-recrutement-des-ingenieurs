//callin data base
const res = require("express/lib/response");
const db = require("../db");

const getClientArchiveService = () => {
  //sql query that will return all client
  let qr_getAllClient = `select count(*) as Archivé
  from client
  where id_etat_client=5;`;

  //promise that will return resolve (allClient) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getAllClient, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("clients:", result);
        resolve(result);
      }
    });
  });
};
//*********************************************************************************** */

//function that will return allClient or return error
const getClientService = () => {
  //sql query that will return all client
  let qr_getAllClient = `select count(*) as Clients
  from client
  where id_etat_client=2;`;

  //promise that will return resolve (allClient) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getAllClient, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("clients:", result);
        resolve(result);
      }
    });
  });
};
//*********************************************************************************** */

//function that will return allClient or return error
const getAllClientprospectService = () => {
  //sql query that will return all client
  let qr_getAllClient = `select count(*) as Prospect
  from client
  where id_etat_client=1;`;

  //promise that will return resolve (allClient) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getAllClient, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("clients:", result);
        resolve(result);
      }
    });
  });
};
//*********************************************************************************** */

//function that will return allClient or return error
const getAllClientService = () => {
  //sql query that will return all client
  let qr_getAllClient = `SELECT * from View_CLIENT`;

  //promise that will return resolve (allClient) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getAllClient, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("clients:", result);
        resolve(result);
      }
    });
  });
};
//*********************************************************************************** */

//function that will return ClientById or return error
const getClientByIdService = (id) => {
  //sql query that will ClientById
  let qr_getClientById = `SELECT * from View_CLIENT
    where id_client= ${id}
    `;
  console.log(qr_getClientById);
  //promise that will return resolve (ClientById) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getClientById, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("client:", result);
        resolve(result);
      }
    });
  });
};
//*********************************************************************************** */
//function that will create a new client  or return error
const createClientService = (
      nom,
      prenom,
      fonction,
      service,
      societe,
      domaine,
      email,
      telephonne,
      adress,
      provenance,
      ressource,
      etat_client,
      
      
     
      
) => {
  //sql query that will create a new besoin
  let qr = `insert into client (nom,prenom,fonction,service,id_societe,id_domaine,email,telephonn,adresse,id_provenance,id_ressource,id_etat_client)
  values ('${nom}','${prenom}','${fonction}','${service}',${societe},${domaine},'${email}','${telephonne}','${adress}',${provenance},${ressource},${etat_client} )`;
  //promise that will return resolve (if create client) or reject error
  console.log("valeur====> client=====>", qr);
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (err) {
        reject(err);
        console.log("erreur qr",err);
      } else {
        console.log("client:", result);
        resolve(result);
      }
    });
  });
};

//*********************************************************************************** */
//function that will update a  client  or return error
const updateClientService = (
  id_client,
  nom,
  prenom,
  fonction,
  service,
  provenance,
  ressource,
  societe,
  etat_client,
  email,
  telephonne,
  adress,
  domaine,
  $
) => {
  //sql query hat will update client
  let qr = `update client set
  nom='${nom}', prenom='${prenom}',fonction='${fonction}',service='${service}',
  id_provenance=${provenance}, id_ressource= ${ressource},id_societe=${societe}, 
  id_etat_client=${etat_client}, email= '${email}', telephonn='${telephonne}', 
  adresse='${adress}', id_domaine=${domaine}
  where id_client=${id_client}`;
  console.log(qr);

  //promise that will return resolve or err
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (err) {
        reject(err);
        console.log("erreur", err);
      } else {
        console.log("client:", result);
        resolve(result);
      }
    });
  });
};

//*********************************************************************************** */
//function that will delete client by id
const deleteClientService = (id_client) => {
  //sql query that will delete client by id
  let qr = `delete from client where id_client = ${id_client} `;
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

//*********************************************************************************** */

//exporting service
module.exports = {
  getAllClientService,
  getClientByIdService,
  updateClientService,
  createClientService,
  deleteClientService,
  getAllClientprospectService,
  getClientService,
  getClientArchiveService,
};
