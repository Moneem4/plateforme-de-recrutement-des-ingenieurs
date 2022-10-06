//calling batabase
const res = require("express/lib/response");
const db = require("../db.js");

//*********************************************************************************** */
//function that will create a new societe or return error
const createSocieteService = (
  nom,
  effectif,
  societe_mere,
  telephone,
  site_web,
  adresse,
  code_postal,
  ville,
  pays,
  date_debut,
  date_fin,
  secteur,
  id_provenance,
  statut_juridique,
  tva_ic,
  siret,
  code_ape
) => {
  //sql query that will create a new societe
  let qr = `insert into societe (nom, effectif, societe_mere, telephone, site_web, adresse, code_postal, ville,pays, date_debut, date_fin, secteur, id_provenance, statut_juridique, tva_ic, siret, code_ape,id_ressource)
    values('${nom}', ${effectif},'${societe_mere}','${telephone}',
        '${site_web}','${adresse}',
    ${code_postal},'${ville}','${pays}',
        '${date_debut}','${date_fin}',
        '${secteur}', ${id_provenance},'${statut_juridique}','${tva_ic}','${siret}',
        '${code_ape}',1
        )`;

  return new Promise((resolve, reject) => {
    console.log(qr);
    db.query(qr, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("create societe service:", result);
        resolve(result);
      }
    });
  });
};

//*********************************************************************************** */
//function that will update a societe or return error
const updateSocieteService = (
  id_societe,
  nom,
  effectif,
  societe_mere,
  telephone,
  site_web,
  adresse,
  code_postal,
  ville,
  pays,
  date_debut,
  date_fin,
  secteur,
  id_provenance,
  statut_juridique,
  tva_ic,
  siret,
  code_ape,
  id_ressource
) => {
  //sql query hat will update societe
  let qr = `update societe 
    set  nom='${nom}',effectif=${effectif},societe_mere='${societe_mere}',telephone='${telephone}',site_web='${site_web}',
    adresse='${adresse}',code_postal=${code_postal}, ville='${ville}', pays='${pays}',date_debut='${date_debut}', date_fin='${date_fin}',secteur='${secteur}',id_provenance=${id_provenance},
             statut_juridique='${statut_juridique}', tva_ic='${tva_ic}',
             siret='${siret}', code_ape='${code_ape}',id_ressource=1
        where id_societe = ${id_societe};`;
        console.log(qr)

  //promise that will return resolve or err
  return new Promise((resolve, reject) => {
    db.query(qr, (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("modification societe avec succé:", res);
        resolve(res);
      }
    });
  });
};

//*********************************************************************************** */
//function that will delete societe by id
const deleteSocieteService = (id_societe) => {
  //sql query that will delete societe by id
  let qr = `delete from societe where id_societe = ${id_societe}
        `;
  //promise that will retur resolve or err
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service supprimé:", result);
        resolve(result);
      }
    });
  });
};

//*********************************************************************************** */

//function that will return allSociete from table societe
const getAllSocieteService = () => {
  let qr_AllSociete = `
  SELECT id_societe
  ,SOS.nom
  ,SOS.effectif
  ,SOS.societe_mere
  ,SOS.telephone
  ,SOS.site_web
  ,SOS.adresse
  ,SOS.code_postal
  ,SOS.ville
  ,SOS.pays
  ,SOS.date_debut
  ,SOS.date_fin
  ,SOS.secteur
 
  ,SOS.statut_juridique
  ,SOS.tva_ic
  ,SOS.siret
  ,SOS.code_ape
 ,PROV.provenance
  ,RES.nom AS Nom_Ressource
  ,RES.prenom AS Prenom_Ressource
 
FROM societe AS SOS
      Left join provenance AS PROV on PROV.id_provenance=SOS.id_provenance
                    Left join ressource AS RES on RES.id_ressource=SOS.id_ressource `;

  //query that will resolve(allSocicete) or reject(err)
  return new Promise((resolve, reject) => {
    db.query(qr_AllSociete, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service: ", result);
        resolve(result);
      }
    });
  });
};

//*********************************************************************************** */
//function that will return SocieteById from table societe
const getSocieteByIdService = (id) => {
  let qr_SocieteById = `
  SELECT id_societe
  ,SOS.nom
  ,SOS.effectif
  ,SOS.societe_mere
  ,SOS.telephone
  ,SOS.site_web
  ,SOS.adresse
  ,SOS.code_postal
  ,SOS.ville
  ,SOS.pays
  ,SOS.date_debut
  ,SOS.date_fin
  ,SOS.secteur
  ,SOS.statut_juridique
  ,SOS.tva_ic
  ,SOS.siret
  ,SOS.code_ape
 ,PROV.provenance
  ,RES.nom AS Nom_Ressource
  ,RES.prenom AS Prenom_Ressource
 FROM societe AS SOS
    Left join provenance AS PROV on PROV.id_provenance=SOS.id_provenance
    Left join ressource AS RES on RES.id_ressource=SOS.id_ressource
    where id_societe = ${id}
        `;

  //query that will resolve(SociceteById) or reject(err)
  return new Promise((resolve, reject) => {
    db.query(qr_SocieteById, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service", result);
        resolve(result);
      }
    });
  });
};

//*********************************************************************************** */

//exporting services
module.exports = {
  getAllSocieteService,
  getSocieteByIdService,
  createSocieteService,
  updateSocieteService,
  deleteSocieteService,
};
