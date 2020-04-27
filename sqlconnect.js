// Bring in mysql package
const mysql = require("mysql");

// Set parameters for connection
const connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "personnel"
  });
  
  

module.exports = connection