//callin service
const {
  createdetaille_long_candidatService,
  getAlldetaille_long_candidatService,
  deletedetaille_long_candidatService,
  updatedetaille_long_candidatService,
  getdetaille_long_candidatByIdService,
  deletedetaille_long_candidatByIdService,
} = require("../services/detaille_long_candidat.service");
//function that will use service and the input user in order to  return result (create new outils) or error

const getAlldetaille_long_CandidatController = async (req, res) => {
  //sql query that will return all qr_getAlldetaille_long_besoin

  //promise that will return resolve (qr_getAlldetaille_long_besoin) or reject error
  res.send(
    await getAlldetaille_long_candidatService()
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};
//get by id
const getdetaille_long_CandidatByIdController = async (req, res) => {
  const id_besoin = req.params.id_besoin;
  const id_langue = req.params.id_langue;

  res.send(
    await getdetaille_long_candidatByIdService(id_besoin, id_langue)
      .then((b) => {
        return b;
      })
      .catch((err) => {
        return console.log(`Error: ${err}`);
      })
  );
};

//creation de detaille_long_besoin
const createdetaille_long_CandidatController = async (req, res) => {
  const id_langue = req.body.id_langue;
  const id_besoin = req.body.id_besoin;

  await createdetaille_long_candidatService(id_besoin, id_langue)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));

  res.send("detaille_long_besoin created");
};
//update
const updatedetaille_long_CandidatController = async (req, res) => {
  const id_langue = req.body.id_langue;
  const id_besoin = req.body.id_besoin;

  res.send(
    await updatedetaille_long_candidatService(id_besoin, id_langue)
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};
//delete
const deletedetaille_long_Candidarontroller = async (req, res) => {
  let id_besoin = req.params.id_besoin;
  res.send(
    await deletedetaille_long_candidatService(id_besoin)
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};
//delete by id
const deletedetaille_long_CandidatByIdController = async (req, res) => {
  const id_langue = req.params.id_langue;
  const id_besoin = req.params.id_besoin;
  res.send(
    await deletedetaille_long_candidatByIdService(id_besoin, id_langue)
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(`error: ${err}`))
  );
};

module.exports = {
  createdetaille_long_CandidatController,
  updatedetaille_long_CandidatController,
  deletedetaille_long_Candidarontroller,
  getdetaille_long_CandidatByIdController,
  getAlldetaille_long_CandidatController,
  deletedetaille_long_CandidatByIdController
};
