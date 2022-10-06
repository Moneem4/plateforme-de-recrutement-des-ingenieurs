//callin data base
const res = require("express/lib/response");
const db = require("../db");

//*********************************************************************************** */
//get position actuele
const getPositionnementAruelle = (id_positionnement) => {
  let qrGet =`select statut_positionnement.statut_positionnement from statut_positionnement ,positionnement where positionnement.id_statut_positionnement=statut_positionnement.id_statut_positionnement and positionnement.id_positionnement = ${id_positionnement} `;
  return new Promise((resolve, reject) => {
    db.query(qrGet, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service:", result);
        resolve(result);
      }
    });
  });}
  

//function that will return allCondidat or return error
const getAllPositionnementService = () => {
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
//function that will return allCondidat or return error
//get detaille projet by id proget
const getPositionnementByIdService = ( id_besoin) => {
  //sql query that will return all positionnement
  let qr_getAllPosiionnement = `SELECT 
   pos.id_positionnement,bes.titre_besoin,        
         bes.discription_offre,
         CONCAT(cond.prenom, ' ' ,cond.nom) as condidat, 
         spo.statut_positionnement,
         pos.commentaire,
         cond.date_de_naissance date_de_naissance_condidat,
         disp.disponibilite disponbilite_condidat,
         mob.mobilite  mobilite_condidat,
         eva.evaluation evaluation_condidat,
         nop.note_profile note_profile_condidat,
         typp.profile profile_condidat,
         stap.statut_profile statut_profile_condidat
  FROM positionnement pos , 
       besoin bes ,
       statut_positionnement spo,
       condidat cond,
       disponibilite disp,
       mobilite mob,
       evaluation eva,
       note_profile nop,
       provenance prov,
       statut_profile stap,
       type_profile typp
   Where
       pos.id_besoin = ${id_besoin}
   and pos.id_besoin = bes.id_besoin
   and pos.id_statut_positionnement = spo.id_statut_positionnement
   and pos.id_condidat = cond.id_condidat
   and cond.id_disponibilite = disp.id_disponibilite
   and cond.id_mobilite = mob.id_mobilite
   and cond.id_evaluation = eva.id_evaluation
   and cond.id_note_profile = nop.id_note_profile
   and cond.id_provenance = prov.id_provenance
   and cond.id_statut_profile = stap.id_statut_profile
   and cond.id_profile = typp.id_profile
   order by id_positionnement;  `;

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
//function that will update a  positionnement  or return error
const updatePositionnementService = (
  id_positionnement,
  id_statut_positionnement
) => {
  //sql query hat will update positionnement
  let qr = `UPDATE positionnement SET
  id_statut_positionnement =${id_statut_positionnement} 
  WHERE id_positionnement=${id_positionnement}`;

  //promise that will return resolve or err
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (err) {
        reject(err);
        console.log(err);
      } else {
        console.log("service:", result);
        resolve(result);
      }
    });
  });
};

//*********************************************************************************** */
//function that will delete positionnement by id
const deletepositionnementService = (id_positionnement) => {
  //sql query that will delete positionnement by id
  let qr = `
  DELETE FROM positionnement
  WHERE id_positionnement =${id_positionnement} 
  and id_statut_positionnement not in (4,5); `;
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
  getAllPositionnementService,
  getPositionnementByIdService,
  updatePositionnementService,
  deletepositionnementService,
  getPositionnementAruelle
};
