const mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "personnel"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connection to database successful ");
    
  });




const queries = {
    viewAll: function() {
        connection.query(
            "SELECT * FROM employee", function(err, res) {
                if (err) throw err;
                console.table(res);

            })
        }
    }
    
    module.exports = queries;
    


