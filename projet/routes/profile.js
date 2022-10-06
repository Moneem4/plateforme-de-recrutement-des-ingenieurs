const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const typeProfilRoute = require("express").Router();

typeProfilRoute.get('/profile', auth.verifyToken, async (req, res) => {
   
    // i will just return a simple data here, you can try yourself to return data from the database

    res.send( { status: 1, data: {userName: 'Alee', userWebsite: 'http://localhost:4200/'} ,message: 'Successful'} )
});



module.exports = typeProfilRoute;