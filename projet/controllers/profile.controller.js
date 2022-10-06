//callin service
const {createProfileService,getAllProfileService,deleteProfileService,updateProfileService,getProfileByIdService } = require("../services/profile.service");
//function that will use service and the input user in order to  return result (create new outils) or error 



const getAllProfileController = async (req, res)  => {
    //sql query that will return all qr_getAllProfile

    //promise that will return resolve (qr_getAllProfile) or reject error
    res.send(await getAllProfileService()
        .then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};
//get by id
const getProfileByIdController = async(req, res) => {
    const id_profile = req.params.id_profile;

    res.send(await getProfileByIdService(id_profile).then((profile) => {
        return profile;
    }).catch(err => {
        return console.log(`Error: ${err}`);
    }));
};

//creation de profile
const createProfileController = async(req, res) => {
    const profile = req.body.profile;
    console.log("controller input", profile);

    await createProfileService(input_label)
        .then((response) => {
            console.log("controller result", response);
            return response;
        })
        .catch((err) =>
            console.log(`erreur: ${err}`));

    res.send("Profile created");


};
//update
const updateProfileController = async(req, res) => {
   
    let profile = req.body.profile;
    let id_profile = req.params.id_profile;


    res.send(
        await updateProfileService(    id_profile,     profile  ).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`))
    );
};
//delete
const deleteProfileController = async(req, res) => {
    let id_profile = req.params.id_profile;
    res.send(await deleteProfileService(id_profile).then((response) => {
            return response;

        })
        .catch((err) => console.log(`error: ${err}`)));
};


module.exports = {
    createProfileController,getAllProfileController,deleteProfileController,updateProfileController,getProfileByIdController
};