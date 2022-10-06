//callin service
const {
    createEnvironnementService,
    getEnvironnementService,
    updateEnvironnementService,
    deleteEnvironnementService
} = require("../services/environnement.service");

//function that will use service and the input user in order to  return result (create new Environnement) or error

const createEnvironnementController = async (req, res) => {
  const input_label = req.body.input_label;
  console.log("controller input", input_label);

  await createEnvironnementService(input_label)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));

  res.send("Environnement created");
};

const getEnvironnementController = async (req, res) => {
  res.send(
    await getEnvironnementService()
      .then((response) => {
        console.log("controller result", response);
        return response;
      })
      .catch((err) => console.log(`erreur: ${err}`))
  );
};

const updateEnvironnementController = async (req, res) => {
  const id = req.params.id_env;
  const input_environnement = req.body.input_environnement;
  await updateEnvironnementService(id, input_environnement)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));
  res.send("updated outil");
};

const deleteEnvironnementController = async (req, res) => {
  const id = req.params.id_env;
  await deleteEnvironnementService(id)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));
  res.send("deleted outil");
};

module.exports = {
  createEnvironnementController,
  getEnvironnementController,
  updateEnvironnementController,
  deleteEnvironnementController
};
