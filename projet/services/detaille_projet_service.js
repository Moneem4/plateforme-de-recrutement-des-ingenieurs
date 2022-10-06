//callin data base
const res = require("express/lib/response");
const db = require("../db");

//function that will return allCondidat or return error
const getdetailleProjetByService = () => {
  //sql query that will return all positionnement
  /*-- Order SELECT ENTETE POSITIONING BY id_besoin
-- Parameter id_bsoin = ? 
-- SELECT To use to display the positioning header 
-- in the screen to change/delete positioning(s) 
*/
  let qr_getAllPosiionnement = `SELECT    
    pos.id_besoin , 
    bes.titre_besoin,
          bes.discription_offre,
          DATE_FORMAT(date_demarrage,'%d/%m/%Y')  date_demarrage,
          DATE_FORMAT(date_reponse,'%d/%m/%Y')  date_reponse,
          DATE_FORMAT(date_cloture,'%d/%m/%Y') date_cloture,
          count(*) nbr_condidat,
          soc.nom as nom_societe,
          CONCAT(cli.nom, ' ' ,cli.prenom)as client,
          
          stb.statut_besoin,
          tyb.type_besoin,
          dom.domaine,
        CONCAT(res.nom, ' ' ,res.prenom)as ressource        
   FROM positionnement pos , 
        besoin bes , 
        statut_besoin stb , 
        type_besoin tyb , 
        domaine dom,
        client cli,
        societe soc,
        ressource res
   Where
    pos.id_besoin = bes.id_besoin
    and bes.id_client = cli.id_client
    and cli.id_societe = soc.id_societe
    and bes.id_statut_besoin = stb.id_statut_besoin
    and bes.id_type_besoin = tyb.id_type_besoin
    and bes.id_domaine = dom.id_domaine
    and bes.id_ressource = res.id_ressource
    Group by  bes.discription_offre,
             bes.date_demarrage,
             bes.date_reponse,
             bes.date_cloture,
             soc.nom,
             cli.nom,
             cli.prenom,
             pos.id_besoin , 
             bes.titre_besoin ,
             stb.statut_besoin,
             tyb.type_besoin,
             dom.domaine,       
            res.nom,res.prenom;`;

  //promise that will return resolve (allPositionnement) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getAllPosiionnement, (err, result) => {
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
//function that will return alldetaill projet or return error
//get candidat position on besoin getted by id besoin
//for exemple if we have a besoin and we position 3 persion 
//this request will retur  candidat 
const getdetailleProjetByIdService = (id_besoin) => {
  //sql query that will return all positionnement
  let qr_getAllPosiionnement = ` SELECT  pro.explication,
  DATE_FORMAT(pro.date_debut,'%d/%m/%Y') as datedebut_projet,
  DATE_FORMAT(pro.date_fin,'%d/%m/%Y') as datefin_projet,
  pro.id_etat_projet,
  epr.etat_projet,
  pro.id_projet,
  prp.id_projet_positionnement,
  prp.id_etat id_etat_projet_positionnement,
  epr2.etat_projet etat_projet_positionnement,
  prp.commentaire,
  bes.titre_besoin ,
  bes.discription_offre,
cond.nom nom_condidat,
  cond.prenom prenom_condidat,
  soc.nom as nom_societe,
  cli.nom as nom_client,
  cli.prenom as prenom_client,
  pos.id_besoin ,
  pos.id_condidat,
  pos.id_positionnement,
  DATE_FORMAT(date_demarrage,'%d/%m/%Y')  date_demarrage_besoin,
  DATE_FORMAT(date_reponse,'%d/%m/%Y')  date_reponse_besoin,
  DATE_FORMAT(date_cloture,'%d/%m/%Y') date_cloture_besoin,
  soc.nom as nom_societe,
  cli.nom as nom_client,
  cli.prenom as prenom_client
FROM projet pro , 
etat_projet epr,
etat_projet epr2,
projet_positionnement prp,
positionnement pos,
besoin bes ,
client cli,
societe soc,
condidat cond
WHERE
pos.id_besoin = ${id_besoin}
and pro.id_projet = prp.id_projet
and pro.id_etat_projet = epr.id_etat_projet
and prp.id_positionnement = pos.id_positionnement
and prp.id_etat = epr2.id_etat_projet
and pos.id_besoin = bes.id_besoin
and bes.id_client = cli.id_client
and cli.id_societe = soc.id_societe
and pos.id_condidat = cond.id_condidat
Order by id_projet_positionnement;
`;

  //promise that will return resolve (allPositionnement) or reject error
  return new Promise((resolve, reject) => {
    db.query(qr_getAllPosiionnement, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service:", result);
        resolve(result);
      }
    });
  });
};
//******************************************************************* */


//*********************************************************************************** */
/*-- For the projet_positionnement table: no delete possible
-- the deletion of rows in projet_positionnement is triggered 
-- by the trigger of the positioning table (as soon as there is a change of status of 4 or 5 --> 1/2 or 3 ) */





/**-- Update TABLE projet_positionnement
-- Parameter to pass id_projet_positionnement / comment 
-- the only area that the user can edit is the comment
-- the state of the row is changed automatically when editing 
-- positioning staut ( positioning table ) 
-- it is the trigger on the positioning table that is responsible for the modification 
-- the state of a row in the table projet_positionnement
-- if positionnement.id_statut_positionnement changes to 4 --> projet_positionnement.state_id is set to 1 == in court
-- if positionnement.id_statut_positionnement changes to 5 --> projet_positionnement.state_id is set to 2 == check in
 */
const updateDetailProjetService = (
    newCommentaire,
    new_id_projet_positionnement
) => {
  //sql query hat will update project
  let qr = `UPDATE projet_positionnement
  SET
  commentaire = '${newCommentaire}'
  WHERE id_projet_positionnement = ${new_id_projet_positionnement};

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

//exporting service
module.exports = {
  getdetailleProjetByService,
  getdetailleProjetByIdService,
  updateDetailProjetService
};

