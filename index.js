const fs = require("fs");
const inquire = require("inquirer");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

const questionList = [
    {
        name: "role",
        message: "Enter your job role",
        type: "list",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        name: "name",
        message: "Enter your name",
        type: "input",
    },
    {
        name: "empId",
        message: "Enter your employee ID",
        type: "input",
    },
    {
        name: "email",
        message: "Enter your Email",
        type: "input",
        validate: function (empEmail) {

            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(empEmail)

            if (valid) {
                return true;
            } else {
                console.log("Please enter a valid email")
                return false;
            }
        }
    },
    {
        name: "empSchool",
        message: "Enter your School",
        type: "input",
        when: function (answers) {
            return answers.empRole === "Intern"
        }
    },
    {
        name: "empOffice",
        message: "Enter your Office number",
        type: "input",
        when: function (answers) {
            return answers.empRole === "Manager"
        }
    },
    {
        name: "empGitHub",
        message: "Enter your GitHub username",
        type: "input",
        when: function (answers) {
            return answers.empRole === "Engineer"
        }
    },
]







function writeHTMLFile()