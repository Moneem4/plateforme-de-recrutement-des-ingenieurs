const res = require("express/lib/response");
//callin service
const {
  createOutilsService,
  updateOutilsService,
  deleteOutilsService,
  getOutilsService
} = require("../services/outils.service");

//function that will use service and the input user in order to  return result (create new outils) or error

const createOutilsController = async (req, res) => {
  const input_label = req.body.input_label;
  console.log("controller input", input_label);

  await createOutilsService(input_label)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));

  res.send("outils created");
};

const getOutilsController = async (req, res) => {
  res.send(
    await getOutilsService()
      .then((response) => {
        console.log("controller result", response);
        return response;
      })
      .catch((err) => console.log(`erreur: ${err}`))
  );
};

const updateOutilsController = async (req, res) => {
  const id = req.params.id_outils;
  const input_outils = req.body.input_outils;
  await updateOutilsService(id, input_outils)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));
  res.send("updated outil");
};

const deleteOutilsController = async (req, res) => {
  const id = req.params.id_outils;
  await deleteOutilsService(id)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));
  res.send("deleted outil");
};

module.exports = {
  createOutilsController,
  updateOutilsController,
  getOutilsController,
  deleteOutilsController,
};
