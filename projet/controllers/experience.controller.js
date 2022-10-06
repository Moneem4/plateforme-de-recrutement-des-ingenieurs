const res = require("express/lib/response");

//calling service
const {
  createExperienceService,
  getExperienceService,
  updateExperienceService,
  deleteExperienceService,
} = require("../services/experience.service");

//function that will return service and take user input to return response (create experience) or error
const createExperienceController = async (req, res) => {
  const input_label = req.body.input_label;

  await createExperienceService(input_label)
    .then((response) => {
      return response;
    })

    .catch((err) => console.log(`err; ${err}`));

  res.send("exp created");
};

const getExperienceController = async (req, res) => {
  res.send(
    await getExperienceService()
      .then((response) => {
        return response;
      })

      .catch((err) => console.log(`err; ${err}`))
  );
};

const updateExperienceController = async (req, res) => {
  const id = req.params.id_experience;
  const input_experience = req.body.input_experience;
  await updateExperienceService(id, input_experience)
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(`err; ${err}`));
  res.send("updated Experience");
};

const deleteExperienceController = async (req, res) => {
  const id_experience = req.params.id_experience;
  await deleteExperienceService(id_experience)
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(`err; ${err}`));
  res.send("deleted Experience");
};

module.exports = {
  createExperienceController,
  getExperienceController,
  updateExperienceController,
  deleteExperienceController,
};
