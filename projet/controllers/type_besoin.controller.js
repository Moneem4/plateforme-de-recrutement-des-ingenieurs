//calling service
const {
  createTypeBesoinService,
  getTypeBesoinService,
  updateTypeBesoinService,
  deleteTypeBesoinService,
} = require("../services/type_besoin.service");

//function that will return service and take user input to return response (create eavluation) or error
const createTypeBesoinController = async (req, res) => {
  const input_label = req.body.input_label;

  await createTypeBesoinService(input_label)
    .then((response) => {
      return response;
    })

    .catch((err) => console.log(`err; ${err}`));

  res.send("evalution created");
};

const getTypeBesoinController = async (req, res) => {
  res.send(
    await getTypeBesoinService()
      .then((response) => {
        return response;
      })

      .catch((err) => console.log(`err; ${err}`))
  );
};

const updateTypeBesoinController = async (req, res) => {
  const id = req.params.id_type_besoin;
  const input_type_besoin = req.body.input_type_besoin;
  await updateTypeBesoinService(id, input_type_besoin)
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(`err; ${err}`));
  res.send("updated TypeBesoin");
};

const deleteTypeBesoinController = async (req, res) => {
  const id = req.params.id_type_besoin;
  await deleteTypeBesoinService(id)
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(`err; ${err}`));
  res.send("deleted TypeBesoin");
};

module.exports = {
  createTypeBesoinController,
  getTypeBesoinController,
  updateTypeBesoinController,
  deleteTypeBesoinController,
};
