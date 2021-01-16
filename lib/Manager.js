// TODO: Write code to define and export the Manager class

const Employee = require("./Employee");


class Manager extends Employee {
    constructor(officeNumber, getRole) { //getRole() function
        super(name, id, email),
            this.officeNumber = officeNumber,
            this.getRole() = getRole()

    }
    getRole() {
        console.log(`${this.name} is ready`)
    }
