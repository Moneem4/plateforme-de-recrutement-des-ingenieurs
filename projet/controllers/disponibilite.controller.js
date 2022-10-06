//callin service
const {
    createDisponibiliteService,
    getDisponibiliteService,
    updateDisponibiliteService,
    deleteDisponibiliteService,
} = require("../services/disponibilite.service");

//function that will use service and the input user in order to  return result (create new outils) or error

const createDisponibiliteController = async (req, res) => {
  const input_label = req.body.input_label;
  console.log("controller input", input_label);

  await createDisponibiliteService(input_label)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));

  res.send("disp created");
};

const getDisponibiliteController = async (req, res) => {
  res.send(
    await getDisponibiliteService()
      .then((response) => {
        console.log("controller result", response);
        return response;
      })
      .catch((err) => console.log(`erreur: ${err}`))
  );
};

const updateDisponibiliteController = async (req, res) => {
  const id = req.params.id_disp;
  const input_disp = req.body.input_disp;
  await updateDisponibiliteService(id, input_disp)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));
  res.send("updated disponibilite");
};

const deleteDisponibiliteController = async (req, res) => {
  const id = req.params.id_disp;
  await deleteDisponibiliteService(id)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));
  res.send("deleted disponibilite");
};

module.exports = {
  createDisponibiliteController,
  updateDisponibiliteController,
  getDisponibiliteController,
  deleteDisponibiliteController,
};
