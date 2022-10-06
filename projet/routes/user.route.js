const express = require('express');
const router = express.Router();
const md5 = require('md5');
const jwt = require('jsonwebtoken');

const mysql = require('mysql');

const con = mysql.createConnection({
  host: process.env.host_db,
    user: process.env.user_db,
    password: process.env.password_db,
    port: process.env.port_db,
    database: process.env.name_db
});

const typeUserRoute = require("express").Router();
/* GET users listing. */
typeUserRoute.post('/register', async function (req, res, next) {
  try {
    let { username, email, password } = req.body; 
   
    const hashed_password = md5(password.toString())

    const checkUsername = `Select username FROM users WHERE username = ?`;
    con.query(checkUsername, [username], (err, result, fields) => {
      console.log("result : ",result)
      if(result.length==0){
        const sql = `Insert Into users (username, email, password) VALUES ( ?, ?, ? )`
        con.query(
          sql, [username, email, hashed_password],
        (err, result, fields) =>{
          if(err){
            res.send({ status: 0, data: err });
          }else{
            let token = jwt.sign({ data: result }, 'secret')
            res.send({ statusCode: 200, data: result, token : token });
          }
         
        })
      } else { res.send({ statusCode: 400, data: "User already exist",});}
    });

    

   
  } catch (error) {
    res.send({ statusCode: "Error", error: error });
  }
});

typeUserRoute.post('/login', async function (req, res, next) {
  try {
    let { username, password } = req.body; 
   
    const hashed_password = md5(password.toString())
    const sql = `SELECT * FROM users WHERE username = ? AND password = ?`
    con.query(
      sql, [username, hashed_password],
    function(err, result, fields){
      console.log("r ",result)
      if(err ||result.length<1){
        res.send({ statusCode: 400, data: err });
      }else{
        let token = jwt.sign({ data: result }, 'secret')
        res.send({ statusCode: 200, data: result, token: token });
      }
     
    })
  } catch (error) {
    res.send({ statusCode: "Error", error: error });
  }
});



module.exports = typeUserRoute;