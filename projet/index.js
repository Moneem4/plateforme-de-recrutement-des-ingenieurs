//importing express
const express = require("express");
const app = express();
app.use(express.json());
const bodyParser = require('body-parser');


const cors = require("cors");

//importing env config
require("dotenv").config();
//creating express instance

app.use(cors());

//Routes
//route for besoin
//const router = require("./routes/router.route");
//app.use('/api/v1/besoins', routeur);
const authRoutes = require('./routes/auth.route');
/************************************************************* */
const errorController = require('./controllers/error');
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, X-Custom-Header, Authorization'
  );
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

//route for user
const userRoute = require("./routes/user.route");
app.use('/api/v1/user', userRoute);

//route for profile
const profilRoute = require("./routes/profile");
app.use('/api/v1/user', profilRoute);

//route for besoin
const besoinRoute = require("./routes/besoin.route");
app.use('/api/v1/besoins', besoinRoute);

//route for ressource
const ressourceRoute = require("./routes/ressource.route");
app.use('/api/v1/ressources', ressourceRoute);


//route for societe
const societeRoute = require("./routes/societe.route");
app.use('/api/v1/societes', societeRoute);

//Route for outils
const outilRoute = require("./routes/outils.route");
app.use('/api/v1/outils', outilRoute);



//route detailleProjet++++++++++++++++++++++++++++
const detailleProjetRoute = require("./routes/detailleProjet_Route");
app.use('/api/v1/detailleProjet', detailleProjetRoute);
const evaluationRoute = require("./routes/evaluation.route");
app.use('/api/v1/evaluation', evaluationRoute);


//route for candidat
const candidatRoute = require("./routes/candidat.route");
app.use('/api/v1/candidats', candidatRoute);

//route for client
const clientRoute = require("./routes/client.route");
app.use('/api/v1/clients', clientRoute);

//route for positionnement
const positionnementRoute= require("./routes/positionnement.route");
app.use('/api/v1/positionnements', positionnementRoute);

//route for projet
const projetRoute = require("./routes/projet.route");
app.use('/api/v1/projets', projetRoute);

//route for etatClient
const EtatCRoute = require("./routes/etat_client.route");
app.use('/api/v1/etatClients', EtatCRoute);

//route for disponibilite
const DispRoute = require("./routes/disponibilite.route");
app.use('/api/v1/disponibilite', DispRoute);

//route for env
const EnvRoute = require("./routes/environnement.route");
app.use('/api/v1/environnement', EnvRoute);

//route for mobilite
const MobiliteRoute = require("./routes/mobilite.route");
app.use('/api/v1/mobilite', MobiliteRoute);

//route for langue
const LangueRoute = require("./routes/langue.route");
app.use('/api/v1/langue', LangueRoute);

//route for domaine
const DomaineRoute = require("./routes/domaine.route");
app.use('/api/v1/domaine', DomaineRoute);

//route for provenance
const ProvenanceRoute = require("./routes/provenance.route");
app.use('/api/v1/provenance', ProvenanceRoute);

//route for provenance
const NoteProfileRoute = require("./routes/note_profile.route");
app.use('/api/v1/noteprofile', NoteProfileRoute);

//route for experience
const ExperienceRoute = require("./routes/experience.route");
app.use('/api/v1/experience', ExperienceRoute);

//route profile
const profileRoute = require("./routes/profile.route");
app.use('/api/v1/profiles', profileRoute);

//route detaille_env_besoinRoute
const detaille_env_besoinRoute = require("./routes/detaille_env_besoin.route");
app.use('/api/v1/envbesoin', detaille_env_besoinRoute);

//route detaille_lang_besoinRoute
const detaille_long_besoinRoute = require("./routes/detaille_long_besoin.route");
app.use('/api/v1/longbesoin', detaille_long_besoinRoute);

//route detaille_lang_besoinRoute
const detaille_outil_besoinRoute = require("./routes/detaille_outil_besoin.route");
app.use('/api/v1/outilbesoin', detaille_outil_besoinRoute);


//route statut_positionnement
const statut_positionnementRoute = require("./routes/statut_positionnement.route");
app.use('/api/v1/statutpositionnement', statut_positionnementRoute);

//route etat_projet
const etat_projetRoute = require("./routes/etat_projet.route");
app.use('/api/v1/etatprojet', etat_projetRoute);

//route type_besoin
const type_besoinRoute = require("./routes/type_besoin.route");
app.use('/api/v1/typebesoin', type_besoinRoute);

//route type_profile
const type_profileRoute = require("./routes/type_profile.route");
app.use('/api/v1/typeprofile', type_profileRoute);

//route statut_besoin
const statut_besoinRoute = require("./routes/statut_besoin.route");
app.use('/api/v1/statutbesoin', statut_besoinRoute);

//route statut_profile
const statut_profileRoute = require("./routes/statut_profile.route");
app.use('/api/v1/statutprofile', statut_profileRoute);

//route detaille_env candidat
const detaille_env_candidatRoute = require("./routes/detaille_env_candidat.route");
app.use('/api/v1/envcandidat', detaille_env_candidatRoute);

//detaille_outil_candidatRoute
const detaille_outil_candidatRoute = require("./routes/detaille_outil_candidat.route");
app.use('/api/v1/outilcandidat', detaille_outil_candidatRoute);

//detaille_long_candidatRoute
const detaille_long_candidatRoute = require("./routes/detaille_long_candidat.route");
app.use('/api/v1/longcandidat', detaille_long_candidatRoute);


//Declaring port
let port;
if (process.env.mode_dev === "production") {
    port = process.env.portApi;
} else {
    port = process.env.portApi_dev;
}

//Executing server
app.listen(3000, () => {
    console.log(`Server running on port:  ${port}`);

});

/*
SEQUELIZE RELATED:

sequelize
  .sync()
  .then((result) => {
    app.listen(port, () => console.log(`running... http://localhost:${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
 */




  