//callin data base
const res = require("express/lib/response");
const db = require("../db");
//function that will return all candidat ib a project
const NbrCondidatProjetsEncoursService = () => {
    //sql query that will return all candidat
    let qr_Candidat = `select count(*) AS NbrCondidatProjetsEncours 
    from condidat where  id_condidat in ( select pos.id_condidat 
                         from positionnement pos , projet_positionnement ppos , projet pro
                         where pos.id_statut_positionnement = 4  
                         and pos.id_positionnement = ppos.id_positionnement
                         and pro.id_projet = ppos.id_projet 
                         and pro.id_etat_projet = 1 
                         );`;

    //promise that will return resolve (allCondidat) or reject error
    return new Promise((resolve, reject) => {
        db.query(qr_Candidat, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("service:", result);
                resolve(result);
            }
        });
    });
};


//function that will return abCondidatpositionner or return error
const getNbrCondidatpositionnerService = () => {
    //sql query that will return all candidat
    let qr_getAllCandidat = `
    select count(*) As NbrCondidatApositionner
    from condidat cond
    where
      IFNULL(cond.actif_ON,'OUI') ='OUI'
      And not Exists ( select id_condidat
                               from positionnement p 
                               where 
                               p.id_statut_positionnement in (1,2,3)
                               and p.id_condidat = cond.id_condidat
                               
                             );
   `;

    //promise that will return resolve (allCondidat) or reject error
    return new Promise((resolve, reject) => {
        db.query(qr_getAllCandidat, (err, result) => {
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
//function that will return allCondidat or return error
const NbrCondidatCVenvoyeService = () => {
    //sql query that will return all candidat
    let qr_Candidat = `select count(*) As NbrCondidatCVenvoye
    from condidat
    where
      IFNULL(actif_ON,'OUI') ='OUI'
      and id_condidat  in ( select id_condidat
                               from positionnement 
                               where 
                               id_statut_positionnement = 2
                              );`;

    //promise that will return resolve (allCondidat) or reject error
    return new Promise((resolve, reject) => {
        db.query(qr_Candidat, (err, result) => {
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
//*********************************************************************************** */

//function that will return allCondidat or return error
const getNbrCondidatApositionnerService = () => {
    //sql query that will return all candidat
    let qr_NbandidatAposi = `select count(*) As NbrCondidatpositionne
    from condidat
    where
      IFNULL(actif_ON,'OUI') ='OUI'
      and id_condidat  in ( select id_condidat
                               from positionnement 
                               where 
                               id_statut_positionnement = 1
                              );`;

    //promise that will return resolve (allCondidat) or reject error
    return new Promise((resolve, reject) => {
        db.query(qr_NbandidatAposi, (err, result) => {
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
const getAllCandidatService = () => {
    //sql query that will return all candidat
    let qr_getAllCandidat = `SELECT * FROM View_CONDIDAT where id_profile <> 2`;

    //promise that will return resolve (allCondidat) or reject error
    return new Promise((resolve, reject) => {
        db.query(qr_getAllCandidat, (err, result) => {
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
//function that will return CondidatById or return error
const getCondidatByIdService = (id) => {
    //sql query that will return CondidatById
    let qr_getAllCandidat = `Select * from view_detail_candidat
    where id_condidat=${id}`;

    //promise that will return resolve (CondidatById) or reject error
    return new Promise((resolve, reject) => {
        db.query(qr_getAllCandidat, (err, result) => {
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
//function that will create a new candidat  or return error
const createCandidatService = (
    newCondidat_numPieceIdentite,
    newCondidat_titre,
    newCondidat_nom,
    newCondidat_prenom,
    newCondidat_date_de_naissance,
    newCondidat_email,
    newCondidat_telephonne,
    newCondidat_adress,
    newCondidat_ville,
    newCondidat_code_postal,
    newCondidat_pays,
    newCondidat_experience_professionnelle,
    newCondidat_formation,
    newCondidat_provenance,
    newCondidat_mobilite,
    newCondidat_note_profile,
    newCondidat_statut_profile,
    newCondidat_profile,
    newCondidat_date_debut,
    newCondidat_date_fin,
    newCondidat_actif_on,
    newCondidat_ressource,
    newCondidat_evaluation,
    newDetailCondidat_id_env,
    newDetailCondidat_id,
    newDetailLang_id,
    newDetailOutil_id
) => {
    //sql query that will create a new candidat
    let qr = `insert into condidat 
    (num_piece_ident, titre, nom, prenom, date_de_naissance, email, telephone, adress, ville, code_postal, 
        pays, experience_professionnelle, id_mobilite, id_evaluation, formation, 
         id_provenance, id_statut_profile, id_ressource, date_debut, date_fin, actif_ON,id_disponibilite,tjm,id_note_profile,id_profile)
    values(
        ${newCondidat_numPieceIdentite}, '${newCondidat_titre}', '${newCondidat_nom}', '${newCondidat_prenom}', 
        ${newCondidat_date_de_naissance},'${newCondidat_email}', '${newCondidat_telephonne}', 
        '${newCondidat_adress}', '${newCondidat_ville}', ${newCondidat_code_postal}, '${newCondidat_pays}', 
        '${newCondidat_experience_professionnelle}',  
        ${newCondidat_mobilite}, ${newCondidat_evaluation},'${newCondidat_formation}', 
        ${newCondidat_provenance},${newCondidat_statut_profile},${newCondidat_ressource},'${newCondidat_date_debut}', 
       '${newCondidat_date_fin}', '${newCondidat_actif_on}',2,0,0,1
        )`;

        

   
    //promise that will return resolve (if create candidat) or reject error
    return new Promise((resolve, reject) => {
        db.query(qr, (err, result) => {
            if (err) {
                reject(err);
                console.log(qr);
            } else {
                console.log("candidat:", result.insertId);
                newDetailCondidat_id=result.insertId;
                resolve(result);
                

        let qr2 ="" ;
        for (let i = 0; i < newDetailCondidat_id_env.length; i++) {
            qr2+=`insert into detaille_env_candidat(id_environnement, id_condidat) values 
            (${newDetailCondidat_id_env[i]},${newDetailCondidat_id});`;
          }
    
        let qr3 ="" ;
        for (let i = 0; i < newDetailLang_id.length; i++) {
            qr3+=`insert into detaille_lang_c(id_condidat, id_langue) values 
            (${newDetailCondidat_id},${newDetailLang_id[i]});`;
          }
    
          let qr4 ="" ;
        for (let i = 0; i < newDetailCondidat_id_env.length; i++) {
            qr2+=`insert into detaille_outils_c(id_condidat, id_outils) values 
            (${newDetailCondidat_id},${newDetailCondidat_id_env[i]});`;
          }
       
        db.query(qr2, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("QR2:", result);
                resolve(result);
            }
        });

        db.query(qr3, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("candidat3:", result);
                resolve(result);
            }
        });

        db.query(qr4, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("candidat4:", result);
                resolve(result);
            }
        });

            }
        });

    });
};

//*********************************************************************************** */
//function that will update a  candidat  or return error
const updateCondidatService = (
    id_condidat,
    newCondidat_numPieceIdentite,
    newCondidat_titre,
    newCondidat_nom,
    newCondidat_prenom,
    newCondidat_date_de_naissance,
    newCondidat_email,
    newCondidat_telephonne,
    newCondidat_adress,
    newCondidat_ville,
    newCondidat_code_postal,
    newCondidat_pays,
    newCondidat_experience_professionnelle,
    newCondidat_formation,
    newCondidat_provenance,
    newCondidat_disponibilite,
    newCondidat_mobilite,
    newCondidat_tjm,
    newCondidat_note_profile,
    newCondidat_statut_profile,
    newCondidat_profile,
    newCondidat_date_debut,
    newCondidat_date_fin,
    newCondidat_actif_on,
    newCondidat_ressource,
    newCondidat_evaluation,
    newDetailCondidat_id_env,
    newDetailLang_id,
    newDetailOutil_id
) => {
    //sql query hat will update candidat
    let qr = `update condidat set 
    num_piece_ident='${newCondidat_numPieceIdentite}', titre='${newCondidat_titre}',nom='${newCondidat_nom}', prenom='${newCondidat_prenom}',
    date_de_naissance='${newCondidat_date_de_naissance}', email='${newCondidat_email}', 
    telephone='${newCondidat_telephonne}', adress='${newCondidat_adress}', ville='${newCondidat_ville}',
    code_postal=${newCondidat_code_postal}, pays='${newCondidat_pays}',experience_professionnelle='${newCondidat_experience_professionnelle}',
    formation= '${newCondidat_formation}', id_mobilite='${newCondidat_mobilite}',
    id_provenance=${newCondidat_provenance},
    id_statut_profile=${newCondidat_statut_profile}, date_debut='${newCondidat_date_debut}',
    date_fin='${newCondidat_date_fin}', actif_ON='${newCondidat_actif_on}'
     where id_condidat=${id_condidat}
    `;

    let qr2= "INSERT INTO detaille_env_candidat (id_condidat, id_environnement) VALUES ";
    let remove_q_2= "DELETE FROM detaille_env_candidat where id_condidat="+id_condidat+";";
    const distinct_newDetailCondidat_id_env = [...new Set(newDetailCondidat_id_env)] ;
    for(let i=0;i<distinct_newDetailCondidat_id_env.length;i++){
        qr2+=`(${id_condidat},${distinct_newDetailCondidat_id_env[i]})`;
        if(i!=distinct_newDetailCondidat_id_env.length-1) {
            qr2+=",";
        }
    }
    

    let qr3= "INSERT INTO detaille_lang_c (id_condidat, id_langue) VALUES";
    let remove_q_3= "DELETE FROM detaille_lang_c where id_condidat="+id_condidat+";";
    const distinct_newDetailLang_id = [...new Set(newDetailLang_id)] ;
    for(let i=0;i<distinct_newDetailLang_id.length;i++){
        qr3+= `(${id_condidat},${distinct_newDetailLang_id[i]})`;
        if(i!=distinct_newDetailLang_id.length-1) {
            qr3+=",";
        }
    }


   
    let qr4= "INSERT INTO detaille_outils_c (id_condidat, id_outils) VALUES ";
    let remove_q_4= "DELETE FROM detaille_outils_c where id_condidat="+id_condidat+";";
    const distinct_newDetailOutil_id = [...new Set(newDetailOutil_id)] ;
    for(let i=0;i<distinct_newDetailOutil_id.length;i++){
        qr4+=`(${id_condidat},${distinct_newDetailOutil_id[i]})`;
        if(i!=distinct_newDetailOutil_id.length-1) {
            qr4+=",";
        }
    }
    console.log(qr2) ;
    console.log(qr3);
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
      
       
       
       
    });
};

//*********************************************************************************** */
//*********************************************************************************** */
//function that will delete candidat by id
const deleteCandidatService = (id_condidat) => {
    //sql query that will delete candidat by id
    let qr = `
    delete from condidat where id_condidat = ${id_condidat}
    `;
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

//exporting service
module.exports = {
    getAllCandidatService,
    getCondidatByIdService,
    createCandidatService,
    deleteCandidatService,
    updateCondidatService,
    getNbrCondidatApositionnerService,
    getNbrCondidatpositionnerService,
    NbrCondidatCVenvoyeService,
    NbrCondidatProjetsEncoursService,
};