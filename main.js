// Bringing in dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

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
  console.log("connection to database successful " + connection.threadId + "\n");
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
                "Remove Employee",
                "View departments",
                "Add departments",
                "Remove Departments", 
                "View roles", 
                "Update employee roles",
                "Add roles",
                "Finish" 
            ]
          },
        ])
        .then(res => {
            console.log(res);
        })
          
        // Set switch based on initial answer
        // const homepage = res.homepage
        // switch(homepage) {
        //     case "View all employees": viewAll();
        //         break;
        //     case "View employees by roll": viewByRoll();
        //         break;
        //     case "View employees by department": viewByDeparment();
        //         break;
        //     case "Add a department": addDepartment();
        //         break;
        //     case "Add an employee": addEmployee();
        //         break;
        //     case "Add a role": addRole();
        //         break;
        //     case "Update an employee's role": updateRole();
        //         break;
        //     case "Finish": endConnection();
        //  };
      };
  