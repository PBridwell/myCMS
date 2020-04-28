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
                type: "list",
                message: "What do you want to do?",
                choices: [
                    "Add Department",
                    "View Departments",
                    "Add Role",
                    "View Roles",
                    "Add Employee",
                    "View Employees",
                    "Update Employee Role",
                    "Finish",
                ],
                name: "firstChoice"
            },
        ])
        .then(response => {
          const selection = response.firstChoice;
          switch(selection) {
            case "View Employees":
              connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, role.id, department.name FROM EMPLOYEE LEFT JOIN role ON (employee.role_id = role.id) LEFT JOIN department ON (role.department_id = department.id)", function (err, res) {
                if (err) throw err;
                console.table(res);
                start();
              })
              break; 
            case "View Roles":
              connection.query("SELECT employee.first_name, employee.last_name, role.id, role.title, role.salary FROM role LEFT JOIN employee ON (role.id = employee.role_id)", function (err, res) {
                if (err) throw err;
                console.table(res);
                start();
              })
              break;
            case "View Departments": 
              connection.query("SELECT * FROM department", function(err, res) {
                if (err) throw err;
                console.table(res);
                start();
              })
              break;
            case "Add Department":
              inquirer.prompt([
                {
                  type: "input",
                  name: "dept_name",
                  message:"What department would you like to add?"
                },
              ]).then(answer => {
                  connection.query(
                    "INSERT INTO department SET ?",
                    {
                      name: answer.dept_name
                    },
                    function (err) {
                      if(err) throw err;
                      console.log("Department succesfully added");
                      // Display updated list
                      connection.query("SELECT * FROM department", function(err, res) {
                        if(err) throw err;
                        console.table(res);
                        start();
                      })
                    }
                  )
              })
              break;
            case "Add Role": 
              connection.query("SELECT * FROM DEPARTMENT", 
              function(err, res) {
                if(err) throw err;
                console.log(res);
                inquirer.prompt([
                  {
                    type: "input",
                    message: "What role would you like to add?",
                    name: "title"
                  },
                  {
                    type: "input",
                    message: "What is the salary for this role?",
                    name: "salary"
                  },
                  {
                    type: "list",
                    message: "What department does this role belong to?",
                    name: "department_id",
                    choices: () => res.map(department => `${department.id} ${department.name}`)
                  }
                ]).then(answer => {
                    connection.query(
                      "INSERT INTO role SET ?",
                      {
                        title: answer.title,
                        salary: answer.salary, 
                        department_id: answer.department_id.slice(0, 1)
                      },
                      function(err) {
                        if(err) throw err; 
                        console.log(`Added role ${answer.title} successfully!`);
                        connection.query(
                          "SELECT * FROM  role", function(err, res) {
                            if(err) throw err;
                            console.table(res);
                            start();

                          }
                        )
                      }
                    )
                })
              })
              break;
              case "Finish":
                connection.end();
                  break;
                default: 
                  break;
          }

        
        
        })

        
  }
          