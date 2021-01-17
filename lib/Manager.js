// TODO: Write code to define and export the Manager class

const { off } = require("process");
const Employee = require("./Employee");


class Manager extends Employee {
    constructor(role, officeNumber) {
        // super()
        this.role = role;
        this.officeNumber = officeNumber;
    }

    getRole() {
        console.log(this.role)
    }
};

// getRole();