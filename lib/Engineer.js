// TODO: Write code to define and export the Engineer class

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getRole() {
        return "Engineer"
    }

    getGitHub() {
        return this.gitHub
    }

    printInfo() {
        return Engineer
    }

};

module.exports = Engineer;