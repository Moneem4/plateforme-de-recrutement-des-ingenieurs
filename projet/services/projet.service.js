//callin data base
const res = require("express/lib/response");
const db = require("../db");

//*********************************************************************************** */
/**--------------------create project-------------------------
 * 
 -- for the 2 project tables and projet_positionnement: no method to create a project or add
-- a row at the table projet_positionnement --> this is the trigger on the positioning table
-- who is responsible for creating projects 
 */

//*********************************************************************************** */
//function that will return allProject or return error
const getAllProjectService = () => {
  //sql query that will return all project
  let qr_getAllProject = `SELECT pro.id_projet,
  bes.titre_besoin ,
   count(*) Nbr_condidat,
    epr.etat_projet,
  DATE_FORMAT(pro.date_debut,'%d/%m/%Y') as datedebut_projet,
  DATE_FORMAT(pro.date_fin,'%d/%m/%Y') as datefin_projet,
  pro.explication,
bes.discription_offre,
  DATE_FORMAT(date_demarrage,'%d/%m/%Y')  date_demarrage,
  DATE_FORMAT(date_reponse,'%d/%m/%Y')  date_reponse,
  DATE_FORMAT(date_cloture,'%d/%m/%Y') date_cloture,
  
  concat(cli.nom, ' ' ,cli.prenom )as nom_prenom_client
FROM projet pro , 
etat_projet epr,
projet_positionnement prp,
positionnement pos,
besoin bes ,
client cli,
societe soc
WHERE
pro.id_projet = prp.id_projet
and pro.id_etat_projet = epr.id_etat_projet
and prp.id_positionnement = pos.id_positionnement
and pos.id_besoin = bes.id_besoin
and bes.id_client = cli.id_client
and cli.id_societe = soc.id_societe
Group by  pro.explication,
   pro.date_debut,
   pro.date_fin,
  pro.id_etat_projet,
  epr.etat_projet,
  pro.id_projet,
  bes.titre_besoin ,
  bes.discription_offre,
  bes.date_demarrage,
   bes.date_reponse,
   bes.date_cloture,
  soc.nom ,
  cli.nom ,
  cli.prenom;`;

  //promise that will return resolve (allProject) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getAllProject, (err, result) => {
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

//function that will return ProjectById or return error
const getProjectByIdService = (id_projet) => {
  //sql query that will return PROJECT BY ID
  /*-- Ordre SELECT PROJET  BY id_projet
   */
  let qr_ProjectById = `SELECT   pro.id_projet,pro.explication,
  DATE_FORMAT(pro.date_debut,'%d/%m/%Y') as datedebut_projet,
  DATE_FORMAT(pro.date_fin,'%d/%m/%Y') as datefin_projet,
  pro.id_etat_projet,
  epr.etat_projet,
  count(*) Nbr_condidat,
 
  bes.titre_besoin ,
  bes.discription_offre,
  DATE_FORMAT(date_demarrage,'%d/%m/%Y')  date_demarrage,
  DATE_FORMAT(date_reponse,'%d/%m/%Y')  date_reponse,
  DATE_FORMAT(date_cloture,'%d/%m/%Y') date_cloture,
soc.nom as nom_societe,
cli.nom as nom_client,
cli.prenom as prenom_client
FROM projet pro , 
etat_projet epr,
projet_positionnement prp,
positionnement pos,
besoin bes ,
client cli,
societe soc
WHERE
pro.id_projet = ${id_projet}
and pro.id_projet = prp.id_projet
and pro.id_etat_projet = epr.id_etat_projet
and prp.id_positionnement = pos.id_positionnement
and pos.id_besoin = bes.id_besoin
and bes.id_client = cli.id_client
and cli.id_societe = soc.id_societe
Group by  pro.explication,
   pro.date_debut,
   pro.date_fin,
  pro.id_etat_projet,
  epr.etat_projet,
pro.id_projet,
  bes.titre_besoin ,
  bes.discription_offre,
  date_demarrage,
  date_reponse,
  date_cloture,
  soc.nom ,
  cli.nom ,
  cli.prenom;
`;

  //promise that will return resolve (aProjectById) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_ProjectById, (err, result) => {
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
//function that will update a  project  or return error
/*-- Update TABLE project
-- Parameter to pass id_etat_projet / date_debut / date_fin / explanation  
-- + id_projet 
-- Example id_projet = 11 ( id_projet used in the WHERE clause ) 
-- PS:
-- For the update of date_debut: in the query below we convert the parameter "2022-10-15" to date 
-- Format used: "YYYY-MM-DD"
-- --> the date_debut parameter to pass in CHAR format: Format: "YYYY-MM-DD"*/
const updateProjetService = (
  id_projet,
  new_explication,
  new_id_etat_projet
) => {
  //sql query hat will update project
  let qr = `UPDATE projet
SET
id_etat_projet = ${new_id_etat_projet}, 
explication ='${new_explication}'
WHERE id_projet = ${id_projet};
    `;
console.log("Request", qr);
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
//function that will delete projet by id
/**
*-- No DELETE 
-- Parameter to pass id_projet 
-- Example id_projet = 10
-- put an end date of the project ( end date = date of the day ) + modify the status of the project 
-- id_etat_projet = 2 --> archived project 
 */
const deleteProjetService = (id_projet) => {
  //sql query that will delete projet by id
  let qr = `UPDATE projet
  SET
  date_fin = CURDATE(), 
  id_etat_projet = 2
  WHERE id_projet=${id_projet}`;
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
//*********************************************************************************** */
//function that will return allProject en cour or return error
const NbrProjetEncourService = () => {
  //sql query that will return all project
  let qr_getProject = `select count(*) as NbrProjetEncours
  From projet 
  Where
  id_etat_projet = 1;`;

  //promise that will return resolve (allProject) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getProject, (err, result) => {
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
//*********************************************************************************** */
//function that will return allProject en cour or return error
const NbrProjetCloturerService = () => {
  //sql query that will return all project
  let qr_Project = `select count(*) as NbrProjetCloturer
  From projet 
  Where
  id_etat_projet = 2;`;

  //promise that will return resolve (allProject) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_Project, (err, result) => {
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
const NbrProjetParmoiService = () => {
  //sql query that will return all project
  let qr_Project = `SELECT YEAR(date_debut) AS ANNEE, MONTH(date_debut) AS MOIS , count(*) NbrProjetMois
  FROM projet 
  GROUP BY YEAR(date_debut) , MONTH(date_debut)
  order by YEAR(date_debut) , MONTH(date_debut);`;

  //promise that will return resolve (allProject) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_Project, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service:", result);
        resolve(result);
      }
    });
  });
};

//exporting service
module.exports = {
  getAllProjectService,
  getProjectByIdService,
  updateProjetService,
  deleteProjetService,
  NbrProjetEncourService,
  NbrProjetCloturerService,
  NbrProjetParmoiService,
};
