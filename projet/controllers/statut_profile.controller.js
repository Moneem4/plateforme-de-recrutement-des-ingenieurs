//calling service
const {
  createStatutProfileService,
  getStatutProfileService,
  updateStatutProfileService,
  deleteStatutProfileService,
} = require("../services/statut_profile.service");

//function that will return service and take user input to return response (create eavluation) or error
const createStatutProfileController = async (req, res) => {
  const input_label = req.body.input_label;

  await createStatutProfileService(input_label)
    .then((response) => {
      return response;
    })

    .catch((err) => console.log(`err; ${err}`));

  res.send("statut profile created");
};

const getStatutProfileController = async (req, res) => {
  res.send(
    await getStatutProfileService()
      .then((response) => {
        return response;
      })

      .catch((err) => console.log(`err; ${err}`))
  );
};

const updateStatutProfileController = async (req, res) => {
  const id = req.params.id_statut_profile;
  const input_statut_profile = req.body.input_statut_profile;
  await updateStatutProfileService(id, input_statut_profile)
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(`err; ${err}`));
  res.send("updated StatutProfile");
};

const deleteStatutProfileController = async (req, res) => {
  const id = req.params.id_statut_profile;
  await deleteStatutProfileService(id)
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(`err; ${err}`));
  res.send("deleted StatutProfile");
};

module.exports = {
  createStatutProfileController,
  getStatutProfileController,
  updateStatutProfileController,
  deleteStatutProfileController,
};
