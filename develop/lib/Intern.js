// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Intern extends employee parent class with school property, getSchool method, and getRole to be Intern.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;