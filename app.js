const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const questions = ([
    // inquirer.prompt([
    // const outline = 

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

// generates prompts in terminal for user to answer
const promptUser = () => {
    return inquirer.prompt(questions)
}

// const renderTeam = (answers) => {
//     return `
// Name: ${answers.name}
// ID: ${answers.id}
// Email: ${answers.email}
// ${answers.officeNumber ? "Office Number: " + answers.officeNumber : ""}
// ${answers.gitHub ? "GitHub Profile: " + answers.gitHub : ""}
// ${answers.school ? "School: " + answers.school : ""}
//     `
// }


const init = async () => {
    try {
        let employeeList = [];
        const employee = await promptUser();
        employeeList.push(employee);

        // based on user input add new employee type

        const team = render(employeeList);
        fs.writeFile(outputPath, team, (err) => console.log(err));

        console.log("Successfully created team roster");
    } catch (error) {
        console.log(error);
    }
};

init();


// Write code to use inquirer to gather information about the development team members, and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location.
