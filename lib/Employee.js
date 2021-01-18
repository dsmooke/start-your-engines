// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // method to get employee's name
    getName() {
        console.log(this.name);
        return this.name;
    }

    // method to get employee's id
    getId() {
        return this.id
    }

    // method to get employee's email address
    getEmail() {
        return this.email
    }

    // method to get employee's company role (Manager, Engineer, or Intern)
    getRole() {
        return "Employee"
    }
};

// getName();
// getId();
// getEmail();
// getRole();

module.exports = Employee;