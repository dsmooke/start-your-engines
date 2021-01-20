const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// let managerHTML = require("./templates/manager.html")


let employeeList = [];

// generates prompts in terminal for user to answer
const promptUser = async () => {
    const answers = await inquirer.prompt(

        [

            { // add name
                type: "input",
                name: "name",
                message: "What is your name?"
            },

            { // add id
                type: "input",
                name: "id",
                message: "What is your ID?",
            },

            { // add email
                type: "input",
                name: "email",
                message: "Enter email address:"
            },

            { // add job title
                type: "list",
                name: "role",
                message: "Select your job title:",
                default: "Employee",
                choices: [
                    "Manager", //if Manager -> office number
                    "Engineer", // if Engineer -> github username
                    "Intern" // if Intern -> school name
                ]
            },

            { // add office number
                type: "input",
                name: "officeNumber",
                message: "What is your office number?",
                when: answers => answers.role === "Manager"
            },

            { // add github name
                type: "input",
                name: "gitHub",
                message: "What is your GitHub username?",
                when: answers => answers.role === "Engineer"
            },

            { // add school name
                type: "input",
                name: "school",
                message: "What school did you attend?",
                when: answers => answers.role === "Intern"
            },
        ])
};


//renders card with input
function renderTeam() {
    if (answers.role === "Engineer") {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
        employeeList.push(engineer);
    }
    else if (answers.role === "Manager") {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeeList.push(manager)
    }
    else if (answers.role === "Intern") {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeeList.push(intern)
    }
    else {
        throw new Error("Your role is not valid.")
    }
    return renderTeam();
};

// return `
// Name: ${answers.name}
// ID: ${answers.id} 
// Email: ${answers.email}
// ${answers.officeNumber ? "Office Number: " + answers.officeNumber : ""}
// ${answers.gitHub ? "GitHub Profile: " + answers.gitHub : ""}
// ${answers.school ? "School: " + answers.school : ""}
// `
// }

const init = async () => {
    try {
        await promptUser();

        const html = await render(employeeList);

        // add managerHTML inside writeFileSync?
        fs.writeFileSync(outputPath, html);

        console.log("Successfully created team roster in the output folder.");

    } catch (error) {
        console.log(error);
    }
};

init();
