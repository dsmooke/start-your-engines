// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, role, id, email) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    }

    // method to get employee's name
    getName() {
    }

    // method to get employee's id
    getId() {
    }

    // method to get employee's email address
    getEmail() {
    }

    // method to get employee's company role (Manager, Engineer, or Intern)
    getRole() {
        if (this.role != Manager || Engineer || Intern) {
            return "Employee"
        } else {
            console.log(`Please specify your role.`)

            // printInfo() {
            //     console.log(`This Employee's name is${this.name}.`);
            //     console.log(`This Employee has an id of ${this.id}`);
            //     console.log(`This Employee's email is ${this.email}`);
            // };
        };

        getName();
        getId();
        getEmail();
        getRole();

        module.exports = Employee;