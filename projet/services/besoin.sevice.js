//callin data base
const res = require("express/lib/response");
const db = require("../db");

//*********************************************************************************** */
const getAllBesoinSansPlacementService = () => {
  //sql query that will return all besoin
  let qr_getAllBesoin = `Select count(*) as Nbr_BesoinAtraiter
  from besoin bes
  where 
  not Exists ( select id_besoin
        from positionnement p 
        where 
          p.id_statut_positionnement in (1,2,3,4)
              and p.id_besoin = bes.id_besoin
              );`;

  //promise that will return resolve (allBesoin) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getAllBesoin, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service:", result);
        resolve(result);
      }
    });
  });
};

const NbrBesoinAvecCondidatService = () => {
  //sql query that will return all besoin
  let qr_getAllBesoin = `Select count(*) as NbrBesoinAvecCondidat
  from besoin bes
  where 
  bes.id_besoin IN ( select id_besoin
             from positionnement p 
             where 
             p.id_statut_positionnement in (1,2,3,4)
            );`;

  //promise that will return resolve (allBesoin) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getAllBesoin, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service:", result);
        resolve(result);
      }
    });
  });
};

//function that will return allBesoin or return error
const getAllBesoinService = () => {
  //sql query that will return all besoin
  let qr_getAllBesoin = `select id_besoin, CONCAT(prenom_client, ' ', nom_client) AS client, titre_besoin, environnement, langue, outils, statut_besoin,
    type_besoin, domaine, discription_offre, experience, tjm, note_profile, date_demarrage, date_reponse, date_cloture, CONCAT(prenom_ressource, ' ', nom_ressource) AS ressource from view_bsoin_with_id;`;

  //promise that will return resolve (allBesoin) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getAllBesoin, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service:", result);
        resolve(result);
      }
    });
  });
};

//********************************************************************************** */
//function that will return BesoinById or return error
const getBesoinByIdService = (id) => {
  //sql query that will return BesoinById
  let qr_getAllBesoin = `select id_besoin, CONCAT(prenom_client, ' ', nom_client) AS client, titre_besoin, environnement, langue, outils, statut_besoin,
    type_besoin, domaine, discription_offre, experience, tjm, note_profile, date_demarrage, date_reponse, date_cloture, CONCAT(prenom_ressource, ' ', nom_ressource) AS ressource from view_bsoin_with_id where id_besoin=${id};`;

  //promise that will return resolve (CondidatById) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getAllBesoin, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service:", result);
        resolve(result);
      }
    });
  });
};
//********************************************************************************** */
//function that will return BesoinById or return error
const getBesoinByIdServiceForUpdate = (ids) => {
  //sql query that will return BesoinById
  let qr_getAllBesoin = `select id_client, titre_besoin, id_statut_besoin, id_type_besoin, id_domaine, discription_offre,
  date_demarrage, date_reponse, date_cloture,tjm,id_note_profile from besoin where id_besoin=${ids};`;

  //promise that will return resolve (CondidatById) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getAllBesoin, (err, result) => {
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
//function that will create a new BESOIN  or return error
//function that will create a new BESOIN  or return error
const createBesoinService = (
  newbesoin_id_client,
  newbesoin_titre_besoin,
  newbesoin_id_statut_besoin,
  newbesoin_id_type_besoin,
  newbesoin_id_domaine,
  newbesoin_discription_offre,
  newbesoin_id_experience,
  newbesoin_tjm,
  newbesoin_id_note_profile,
  newbesoin_date_demarrage,
  newbesoin_date_reponse,
  newbesoin_date_cloture,
  newbesoin_id_ressource,
  newDetailLang_id,
  newDetailOutil_id,
  newDetailBesoin_id_env
) => {
  //sql query that will create a new besoin
  //sql query that will insert into table client
  let qr = `INSERT INTO besoin( id_client, titre_besoin, id_statut_besoin, id_type_besoin, id_domaine, discription_offre,
        id_experience, date_demarrage, date_reponse, date_cloture,tjm,id_note_profile,id_ressource)
    values(
        ${newbesoin_id_client}, '${newbesoin_titre_besoin}', ${newbesoin_id_statut_besoin}, ${newbesoin_id_type_besoin}, 
        ${newbesoin_id_domaine},'${newbesoin_discription_offre}',1, 
          '${newbesoin_date_demarrage}', 
        '${newbesoin_date_reponse}', '${newbesoin_date_cloture}',100,1,1)`;

  console.log(qr);

  //sql query that will insert into table detaille outils besoin

  //promise that will return resolve (if create besoin) or reject error
  let newDetailBesoin_id;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("besoin:", result);
        newDetailBesoin_id = result.insertId;
        resolve(result);
        let qr2 =
          "insert into detaille_env_besoin (id_environnement, id_besoin) values ";
        for (let i = 0; i < newDetailBesoin_id_env.length; i++) {
          qr2 += `(${newDetailBesoin_id_env[i]},${newDetailBesoin_id})`;
          if (i < newDetailBesoin_id_env.length - 1) {
            qr2 += ",";
          }
        }
        let qr3 = "insert into detaille_lang_b (id_besoin, id_langue) values ";
        for (let i = 0; i < newDetailLang_id.length; i++) {
          qr3 += `(${newDetailBesoin_id},${newDetailLang_id[i]})`;
          if (i < newDetailLang_id.length - 1) {
            qr3 += ",";
          }
        }

        let qr4 =
          "insert into detaille_outils_b (id_besoin, id_outils) values ";
        for (let i = 0; i < newDetailOutil_id.length; i++) {
          qr4 += `(${newDetailBesoin_id},${newDetailOutil_id[i]})`;
          if (i < newDetailOutil_id.length - 1) {
            qr4 += ",";
          }
        }

        db.query(qr2, (err, result) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            console.log("detaille_env_besoin:", result);
            resolve(result);
          }
        });

        db.query(qr3, (err, result) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            console.log("detaille_lang_besoin:", result);
            resolve(result);
          }
        });

        db.query(qr4, (err, result) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            console.log("detaille_outils_besoin:", result);
            resolve(result);
          }
        });
        callProcedureService(newDetailBesoin_id);
      }
    });
  });
};


//*********************************************************************************** */
//function that will update a  besoin  or return error
const updateBesoinService = (
  id_besoin,
  newbesoin_id_client,
  newbesoin_titre_besoin,
  newbesoin_id_statut_besoin,
  newbesoin_id_type_besoin,
  newbesoin_id_domaine,
  newbesoin_discription_offre,
  newbesoin_tjm,
  newbesoin_date_demarrage,
  newbesoin_date_reponse,
  newbesoin_date_cloture,
  newDetailBesoin_id_env,
  newDetailLang_id,
  newDetailOutil_id
) => {
  //sql query hat will update besoin
  let qr = `update besoin set 
  id_client=${newbesoin_id_client}, titre_besoin='${newbesoin_titre_besoin}',id_statut_besoin=${newbesoin_id_statut_besoin}, id_type_besoin='${newbesoin_id_type_besoin}',
  id_domaine=${newbesoin_id_domaine}, discription_offre='${newbesoin_discription_offre}',tjm='${newbesoin_tjm}',
   date_demarrage='${newbesoin_date_demarrage}',date_reponse='${newbesoin_date_reponse}', date_cloture='${newbesoin_date_cloture}'
  where id_besoin=${id_besoin} `;
  console.log(qr);

  let qr2= "INSERT INTO detaille_env_besoin (id_besoin, id_environnement) VALUES ";
  let remove_q_2= "DELETE FROM detaille_env_besoin where id_besoin="+id_besoin+";";
  const distinct_newDetailBesoin_id_env = [...new Set(newDetailBesoin_id_env)] ;
  for(let i=0;i<distinct_newDetailBesoin_id_env.length;i++){
      qr2+=`(${id_besoin},${distinct_newDetailBesoin_id_env[i]})`;
      if(i!=distinct_newDetailBesoin_id_env.length-1) {
          qr2+=",";
      }
  }console.log(qr2);
  

  let qr3= "INSERT INTO detaille_lang_b (id_besoin, id_langue) VALUES";
  let remove_q_3= "DELETE FROM detaille_lang_b where id_besoin="+id_besoin+";";
  const distinct_newDetailLang_id = [...new Set(newDetailLang_id)] ;
  for(let i=0;i<distinct_newDetailLang_id.length;i++){
      qr3+= `(${id_besoin},${distinct_newDetailLang_id[i]})`;
      if(i!=distinct_newDetailLang_id.length-1) {
          qr3+=",";
      }
  }console.log(qr3);


 
  let qr4= "INSERT INTO detaille_outils_b (id_besoin, id_outils) VALUES ";
  let remove_q_4= "DELETE FROM detaille_outils_b where id_besoin="+id_besoin+";";
  const distinct_newDetailOutil_id = [...new Set(newDetailOutil_id)] ;
  for(let i=0;i<distinct_newDetailOutil_id.length;i++){
      qr4+=`(${id_besoin},${distinct_newDetailOutil_id[i]})`;
      if(i!=distinct_newDetailOutil_id.length-1) {
          qr4+=",";
      }
  }
  console.log(qr4);

  //promise that will return resolve or err
  // console.log("Req:", qr.toString());
  return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
          if (err) {
              reject(err);
              console.log("update:", err);
          } else {
              console.log("service:", result);
              resolve(result);
          }
          db.query(remove_q_2, (err, result) => {
              if (err) {
                  reject(err);
              } else {
                  console.log("service:", result);
                  resolve(result);
              }
             
          });
          db.query(remove_q_3, (err, result) => {
              if (err) {
                  reject(err);
              } else {
                  console.log("service:", result);
                  resolve(result);
              }
              
          });
          db.query(remove_q_4, (err, result) => {
              if (err) {
                  reject(err);
              } else {
                  console.log("service:", result);
                  resolve(result);
              }
             
          });
          db.query(qr2, (err, result) => {
              if (err) {
                  reject(err);
                  console.log(err);
              } else {
                  console.log("service:", result);
                  resolve(result);
              }
          });
          db.query(qr3, (err, result) => {
              if (err) {
                  reject(err);
                  console.log(err);
              } else {
                  console.log("service:", result);
                  resolve(result);
              }
          });
          db.query(qr4, (err, result) => {
              if (err) {
                  reject(err);
                  console.log(err);
              } else {
                  console.log("service:", result);
                  resolve(result);
              }
          });
      });
    

    callProcedureService(id_besoin);
  });
};

//********************************************************************************** */
//********************************************************************************** */
//function that will call procedure to positionnement candidat or return error
const callProcedureService = (id_besoin) => {
  //sql query that will return BesoinById
  console.log("avant saisie");
  let qr_positionner = `call P_Positionner_Besoin(${id_besoin},@outval) `;
  console.log("apres saisie", qr_positionner);

  //promise that will return resolve (CondidatById) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_positionner, (err, result, fields) => {
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
//function that will delete besoin by id
const deleteBesoinService = (id_besoin) => {
  //sql query that will delete besoin by id
  let qr = `
    delete from besoin where id_besoin = ${id_besoin}
    `;
  //sql query hat will delete env besoin
  let qr2 = `DELETE FROM detaille_env_besoin where id_besoin=${id_besoin}`;

  //sql query hat will delete langue besoin
  let qr3 = `DELETE FROM detaille_lang_b where id_besoin=${id_besoin}`;

  //sql query hat will delete outils besoin
  let qr4 = `DELETE FROM detaille_outils_b where id_besoin=${id_besoin}`;

  //promise that will retur resolve or err
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("delete besoin:", result);
        resolve(result);
      }
    });
    db.query(qr2, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("delete env besoin:", result);
        resolve(result);
      }
    });
    db.query(qr3, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("delete: langue besoin", result);
        resolve(result);
      }
    });
    db.query(qr4, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("delete outils besoin:", result);
        resolve(result);
      }
    });
  });
};

//*********************************************************************************** */

//exporting service
module.exports = {
  getAllBesoinService,
  getBesoinByIdService,
  createBesoinService,
  deleteBesoinService,
  updateBesoinService,
  callProcedureService,
  getAllBesoinSansPlacementService,
  NbrBesoinAvecCondidatService,
  getBesoinByIdServiceForUpdate,
};
