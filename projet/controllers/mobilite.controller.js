const res = require("express/lib/response");
//callin service
const {
  createMobiliteService,
  getMobiliteService,
  updateMobiliteService,
  deleteMobiliteService
} = require("../services/mobilite.service");

//function that will use service and the input user in order to  return result (create new mobilite) or error

const createoMobiliteController = async (req, res) => {
  const input_label = req.body.input_label;
  console.log("controller input", input_label);

  await createMobiliteService(input_label)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));

  res.send("mobilite created");
};

const getMobiliteController = async (req, res) => {
  res.send(
    await getMobiliteService()
      .then((response) => {
        console.log("controller result", response);
        return response;
      })
      .catch((err) => console.log(`erreur: ${err}`))
  );
};

const updateMobiliteController = async (req, res) => {
  const id = req.params.id_mobilite;
  const input_mobilite = req.body.input_mobilite;
  await updateMobiliteService(id, input_mobilite)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));
  res.send("updated mobilite");
};

const deleteMobiliteController = async (req, res) => {
  const id = req.params.id_mobilite;
  await deleteMobiliteService(id)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));
  res.send("deleted mobilite");
};

module.exports = {
  createoMobiliteController,
  getMobiliteController,
  updateMobiliteController,
  deleteMobiliteController
};
