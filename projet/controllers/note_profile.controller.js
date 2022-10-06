//callin service
const {
    createNoteProfileService,
    getNoteProfileService,
    updateNoteProfileService,
    deleteNoteProfileService
} = require("../services/note_profile.service");

//function that will use service and the input user in order to  return result (create new note_profile) or error

const createoNoteProfileController = async (req, res) => {
  const input_label = req.body.input_label;
  console.log("controller input", input_label);

  await createNoteProfileService(input_label)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));

  res.send("NoteProfile created");
};

const getNoteProfileController = async (req, res) => {
  res.send(
    await getNoteProfileService()
      .then((response) => {
        console.log("controller result", response);
        return response;
      })
      .catch((err) => console.log(`erreur: ${err}`))
  );
};

const updateNoteProfileController = async (req, res) => {
  const id = req.params.id_note_profile;
  const input_note_profile = req.body.input_note_profile;
  await updateNoteProfileService(id, input_note_profile)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));
  res.send("updated note_profile");
};

const deleteNoteProfileController = async (req, res) => {
  const id = req.params.id_note_profile;
  await deleteNoteProfileService(id)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));
  res.send("deleted NoteProfile");
};

module.exports = {
  createoNoteProfileController,
  getNoteProfileController,
  updateNoteProfileController,
  deleteNoteProfileController,
};
