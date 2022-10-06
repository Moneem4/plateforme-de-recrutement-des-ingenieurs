//calling controller NoteProfile.controller
const {
    createoNoteProfileController,
    getNoteProfileController,
    updateNoteProfileController,
    deleteNoteProfileController
  } = require("../controllers/note_profile.controller");
  
  //calling module router from express
  const noteProfileRoute = require("express").Router();
  
  //appling post methode to the route
  noteProfileRoute.post("/", createoNoteProfileController);
  //console.log("route NoteProfile");
  
  noteProfileRoute.get("/", getNoteProfileController);
  
  noteProfileRoute.put("/:id_note_profile", updateNoteProfileController);
  
  noteProfileRoute.delete("/:id_note_profile", deleteNoteProfileController);
  
  module.exports = noteProfileRoute;
  