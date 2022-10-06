const mysql = require("mysql");

//creating database
const db = mysql.createConnection({
    host: process.env.host_db,
    user: process.env.user_db,
    password: process.env.password_db,
    port: process.env.port_db,
    database: process.env.name_db
});

//connecting to the database
db.connect(function(err, result) {
    if (err) throw err;
    else {
        console.log("database connected !");
    }

});

module.exports = db;

/* 
SEQUELIZE RELATED:

const Sequelize = require('sequelize')


const sequelize = new Sequelize('smartmed', 'PFE2022', 'PFE2022=', {  
    host: '172.83.14.166',  
    dialect: 'mysql',
    port: 3306
  });  


module.exports = sequelize */