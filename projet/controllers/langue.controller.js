const res = require("express/lib/response");
//callin service
const {
    createLangueService,
    getLangueService,
    updateLangueService,
    deleteLangueService
} = require("../services/langue.service");

//function that will use service and the input user in order to  return result (create new langue) or error

const createoLangueController = async (req, res) => {
  const input_label = req.body.input_label;
  console.log("controller input", input_label);

  await createLangueService(input_label)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));

  res.send("Langue created");
};

const getLangueController = async (req, res) => {
  res.send(
    await getLangueService()
      .then((response) => {
        console.log("controller result", response);
        return response;
      })
      .catch((err) => console.log(`erreur: ${err}`))
  );
};

const updateLangueController = async (req, res) => {
  const id = req.params.id_langue;
  const input_langue = req.body.input_langue;
  await updateLangueService(id, input_langue)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));
  res.send("updated langue");
};

const deleteLangueController = async (req, res) => {
  const id = req.params.id_langue;
  await deleteLangueService(id)
    .then((response) => {
      console.log("controller result", response);
      return response;
    })
    .catch((err) => console.log(`erreur: ${err}`));
  res.send("deleted langue");
};

module.exports = {
  createoLangueController,
  getLangueController,
  updateLangueController,
  deleteLangueController,
};
