// calling database
const db = require("../db.js");

//function that either creates a outil  or returns an error
const createNoteProfileService = (input_label) => {
  //Sql query that inserts a outils into outils table
  let qr_createNoteProfile = `INSERT INTO note_profile (note_profile) VALUES ('${input_label}')`;

  //Promise that either will return the awaited result or return an error
  return new Promise((resolve, reject) => {
    db.query(qr_createNoteProfile, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service", result);
        resolve(result);
      }
    });
  });
};

const getNoteProfileService = () => {
  let qr = `select * from note_profile`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const updateNoteProfileService = (NoteProfile_id, input_NoteProfile) => {
  let qr = `update note_profile set note_profile='${input_NoteProfile}' where id_note_profile=${NoteProfile_id}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const deleteNoteProfileService = (note_profile_id) => {
  let qr = `delete from note_profile where id_note_profile=${note_profile_id}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

//exporting services
module.exports = {
  createNoteProfileService,
  getNoteProfileService,
  updateNoteProfileService,
  deleteNoteProfileService
};
