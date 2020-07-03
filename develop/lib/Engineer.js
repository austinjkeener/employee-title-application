// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
const engineer = require("./Engineer");

class Engineer extends Employee {
    constructor (name,roll,id,github,email){
        super(name,roll,id,email);
        this.github = github;
    }
    github(){
        return this.github;
    }
};