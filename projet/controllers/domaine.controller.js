const res = require("express/lib/response");
//callin service
const {
    createDomaineService,
    getDomaineService,
    updateDomaineService,
    deleteDomaineService
} = require("../services/domaine.service");

//function that will use service and the input user in order to  return result (create new langue) or error

const createoDomaineController = async (req, res) => {
  const input_label = req.body.input_label;
  console.log("controller input", input_label);

  await createDomaineService(input_label)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));

  res.send("Domaine created");
};

const getDomaineController = async (req, res) => {
  res.send(
    await getDomaineService()
      .then((response) => {
        console.log("controller result", response);
        return response;
      })
      .catch((err) => console.log(`erreur: ${err}`))
  );
};

const updateDomaineController = async (req, res) => {
  const id = req.params.id_domaine;
  const input_domaine = req.body.input_domaine;
  await updateDomaineService(id, input_domaine)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));
  res.send("updated Domaine");
};

const deleteDomaineController = async (req, res) => {
  const id = req.params.id_Domaine;
  await deleteDomaineService(id)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));
  res.send("deleted domaine");
};

module.exports = {
  createoDomaineController,
  getDomaineController,
  updateDomaineController,
  deleteDomaineController,
};
