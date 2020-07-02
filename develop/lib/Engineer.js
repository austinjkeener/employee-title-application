// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
const Engineer = require("./Engineer");

class Engineer extends Employee {
    constructor (name,roll,id,github){
        super(name,roll,id);
        this.github = github;
    }
};