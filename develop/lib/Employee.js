// TODO: Write code to define and export the Employee class

const Employee = require("./Employee");

class Employee {
    constructor (name, role, id) {
        this.name = name;
        this.role = role;
        this.id = id;
    }
}

module.exports = Employee;