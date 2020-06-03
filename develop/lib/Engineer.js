// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Engineer extends employee parent class with github username property, getGithub method, and getRole to return "Engineer"

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;