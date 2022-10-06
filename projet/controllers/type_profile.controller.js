//calling service
const {
  createTypeProfileService,
  getTypeProfileService,
  updateTypeProfileService,
  deleteTypeProfileService,
} = require("../services/type_profile.service");

//function that will return service and take user input to return response (create eavluation) or error
const createTypeProfileController = async (req, res) => {
  const input_label = req.body.input_label;

  await createTypeProfileService(input_label)
    .then((response) => {
      return response;
    })

    .catch((err) => console.log(`err; ${err}`));

  res.send("profile created");
};

const getTypeProfileController = async (req, res) => {
  res.send(
    await getTypeProfileService()
      .then((response) => {
        return response;
      })

      .catch((err) => console.log(`err; ${err}`))
  );
};

const updateTypeProfileController = async (req, res) => {
  const id = req.params.id_type_profile;
  const input_type_profile = req.body.input_type_profile;
  await updateTypeProfileService(id, input_type_profile)
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(`err; ${err}`));
  res.send("updated TypeProfile");
};

const deleteTypeProfileController = async (req, res) => {
  const id = req.params.id_type_profile;
  await deleteTypeProfileService(id)
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(`err; ${err}`));
  res.send("deleted TypeProfile");
};

module.exports = {
  createTypeProfileController,
  getTypeProfileController,
  updateTypeProfileController,
  deleteTypeProfileController,
};
