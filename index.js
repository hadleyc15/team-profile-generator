const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./output/template");
const Manager = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");


const employeeList = [];


function profileGen() {
    console.log("Welcome to the Team Profile Generator. You will enter your manager first, followed by the rest of your team.");
    createFile("team.html", generateHTML.generateHTML());
    newManager();      
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "employeeRole",
                message: "What is the new employee's role?",
                choices: ['Engineer', 'Intern']
            }
        ])
        .then(function (data) {
            if (data.employeeRole === "Engineer") {
                newEngineer();
            }else{
                newIntern();
            }
        });       
}

function newManager() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "title",
                message: "Please verify the employee's title:",
                choices: ["Manager"]
            },
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's ID number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email address?",
                validate: function (email) {

                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        
                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter a valid email")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?"
            }
        ])
        .then(function(data) {
            let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            employeeList.push(manager);
                addToFile("team.html", generateHTML.addManagerCard(data));
                addAnother();
        });
}

function newEngineer() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "title",
                message: "Please verify your selection:",
                choices: ["Engineer"]
            },
            {
                type: "input",
                name: "name",
                message: "Please enter the new engineer's name."
            },
            {
                type: "input",
                name: "id",
                message: "Please enter the new engineer's ID number."
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the new engineer's ID email address.",
                validate: function (email) {

                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        
                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter a valid email")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "github",
                message: "Please enter the new engineer's GitHub username."
            }
        ])
        .then(function(data) {
            let engineer = new Engineer(data.name, data.id, data.email, data.github);
            employeeList.push(engineer);
            addToFile("team.html", generateHTML.addEngineerCard(data));
            addAnother();
        });
}

function newIntern() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "title",
                message: "Please verify your selection:",
                choices: ["Intern"]
            },
            {
                type: "input",
                name: "name",
                message: "Please enter the new intern's name."
            },
            {
                type: "input",
                name: "id",
                message: "Please enter the new intern's ID number."
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the new intern's ID email address.",
                validate: function (email) {

                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        
                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter a valid email")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "school",
                message: "Please enter the new intern's school."
            }
        ])
        .then(function(data) {
            let intern = new Intern(data.name, data.id, data.title, data.email, data.school);
            employeeList.push(intern);
            addToFile("team.html", generateHTML.addInternCard(data));
            addAnother();
        });
}

function addAnother() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "addAnother",
            message: "Would you like to add another employee?",
            choices: ['Yes', 'No']
        }
    ])
    .then(function(data) {
        if(data.addAnother === "Yes") {
            addEmployee();
        }else{
            finish();
        }
    });
} 

function createFile(html, data) {
    fs.writeFile(html, data, function(err) {
        if (err) {
            return Error;
        }
    });
}

function addToFile (html, data) {
    fs.appendFile(html, data, function(err) {
        if (err) {
            return Error;
        }
    });
}

function finish() {
    console.log("Your team profile has been generated! Check out the team.html file.")
};


profileGen();