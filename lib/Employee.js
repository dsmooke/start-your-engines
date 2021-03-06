// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // method to get employee's name
    getName() {
        // console.log(this.name);
        return this.name;
    }

    // method to get employee's id
    getId() {
        // console.log(this.id);
        return this.id
    }

    // method to get employee's email address
    getEmail() {
        // console.log(this.email);
        return this.email
    }

    // method to get employee's company role (Manager, Engineer, or Intern)
    getRole() {
        // console.log("Employee");
        return "Employee"
    }
    // method to print the employee's data: name, id, email
    printInfo() {
        return Employee
    }
};

module.exports = Employee;