// Bringing in dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const queries = require("./queries.js");


start();

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
            console.log(res);
        // Set switch based on initial answer
        const homepage = res.homepage
        switch(homepage) {
            case "View all employees": queries.viewAll();
                break;
            // case "View employees by roll": viewByRoll();
            //     break;
            // case "View employees by department": viewByDeparment();
            //     break;
            // case "Add a department": addDepartment();
            //     break;
            // case "Add an employee": addEmployee();
            //     break;
            // case "Add a role": addRole();
            //     break;
            // case "Update an employee's role": updateRole();
            //     break;
            // case "Finish": endConnection();
                default: connection.end()
         };
    })
};
