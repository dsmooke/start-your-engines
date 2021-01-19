const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// const writeFileAsync = util.promisify(fs.writeFile);
// const util = require("util");

const render = require("./lib/htmlRenderer");

// default questions, last question will lead to role-specific question
const questions = [
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

    // ROLE SPECIFIC QUESTIONS

    { //add office number if manager 
        type: "input",
        name: "officeNumber",
        message: "What is your office number?"
    },

    { //add github username if engineer 
        type: "input",
        name: "gitHub",
        message: "What is your GitHub username?"
    },

    { //add school name if intern
        type: "input",
        name: "school",
        message: "What school did you attend?"
    },

    // ADD OR SUBMIT QUESTION

    { //add another Employee?
        type: "confirm",
        name: "addEmployee",
        message: "Add Employee? Select no to submit."
    }
]
    .then(answers => {
        if (answers.role === "Manager") {
            var prompt = inquirer.createPromptModule();
            prompt(questions.officeNumber);
        } else if (answers.role === "Engineer") {
            var prompt = inquirer.createPromptModule();
            prompt(questions.gitHub);
        } else {
            var prompt = inquirer.createPromptModule();
            prompt(questions.school);
        };


        // return inquirer.Question.officeNumber
        // } else if
        //     (answers.role === "Engineer") {
        //     return inquirer.Question.gitHub
        // } else {
        //     return inquirer.Question.school
        // }

        // while (answers.addEmployee === true) {
        //     return inquirer.prompt(questions.addEmployee), i++;
        // }



        //     // 
        // ]).then(answers => {//use user feedback for...whatever
        //     // while yes to adding new employee, go through prompts again
        //     while (answers.addEmployee === true) {
        //         return inquirer.prompt(), i++;
        //     }
        //     if (answers.role === "Manager") {
        //         return inquirer.Question.officeNumber
        //     } else if
        //         (answers.role === "Engineer") {
        //         return inquirer.Question.gitHub
        //     } else {
        //         return inquirer.Question.school
        //     }



    })
    .catch(error => {
        if (error.isTtyError) {
            return "prompt couldn't be rendered in the current environment"
        } else {
            return "something else went wrong"
        }
    });


// if (employee.getRole() === "Manager") {
//     outline.push[{
//         type: "input",
//         name: "officeNumber",
//         message: "What is your office number?"
//     }]
// }

// if (answers.name === "Engineer") {
//         filter() {
//             return new inquirer.prompt{ 
// type: "input",
// name: "officeNumber",
// message: "What is your office number?"
//             }
//         }
//     }

// generates prompts in terminal for user to answer
const promptUser = () => {
    return inquirer.prompt();
};


// render() // returns a block of HTML including templated divs for each employee

const renderTeam = (answers) => {
    return `
Name: ${answers.name}
ID: ${answers.id}
Email: ${answers.email}
GitHub Profile: ${answers.gitHub}
School: ${answers.school}
    `
};

const init = async () => {
    try {
        const addedText = await promptUser();
        const team = renderTeam(addedText);
        await writeFileAsync("team.html", team);

        console.log("Successfully created team roster");
    } catch (error) {
        console.log(error);
    }
};

init();


// Write code to use inquirer to gather information about the development team members, and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location.
