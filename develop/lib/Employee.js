// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name; //property for name
        this.id = id; //property for id
        this.email = email; //property for email
    }

    getName() {
        return this.name; //method to return name
    }

    getId() {
        return this.id; //method to return id
    }

    getEmail() {
        return this.email; //method to return email
    }

    getRole() {
        return "Employee"; //method to return role
    }
}

module.exports = Employee;