// Bringing in dependencies
const inquirer = require("inquirer");
const cTable = require("console.table");

// Connecting to sql through import
const connection = require("./sqlconnect")

// Init connection
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connection to database successful ");
    start();
  });




function start() {
    inquirer
      .prompt([
          {
              name: "homepage",
              type: "list",
              message: "What would you like to do?",
              choices: [
                "View all employees",
                "Add employee",
                "View departments",
                "Add departments", 
                "View roles", 
                "Update employee roles",
                "Add roles" 
            ]
          },
        ])

        .then(res => {

        })
        
      
      }
      connection.end();
          