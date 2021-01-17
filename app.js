const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const util = require("util");
const { captureRejectionSymbol } = require("events");
const { fileURLToPath } = require('url');

const writeFileAsync = util.promisify(fs.writeFile);

// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

const outline = [

    { // add name
        type: "input",
        name: "name",
        message: "Enter full name:"
    },

    { // add id
        type: "input",
        name: "id",
        message: "Enter ID:",
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
        choices: [
            "Manager"
            // Engineer,
            // Intern
        ]
    },

]

const promptUser = () => {
    return inquirer.prompt(outline);
};

const renderTeam = (answers) => {
    // if (this.role === answers.role[0]) {
    return `
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    {{ team }}<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${answers.name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${answers.role}
        </h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:${answers.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
            <li class="list-group-item">Office number:{answers.officeNumber}</li>
        </ul>
    </div>
</div>
                </div>
            </div>
        </div>
    </body>

</html>

    `
    // } else {
    //     console.log("You are not a Manager")
    // }
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

// Hint: you may need to check if the `output` folder exists and create it if it does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different information; write your code to ask different questions via inquirer depending on employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer, and Intern classes should all extend from a class named Employee; see the directions for further information. Be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order for the provided `render` function to work! ```
