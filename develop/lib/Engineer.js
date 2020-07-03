// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// i am requiring the employee.js file to be read within this file through the act of 'extends'
const Employee = require("./Employee");

// this is the class for engineer that contains variables and methods
class Engineer extends Employee {
    // these are all of the variable names
    constructor (name,id,email,github){
        //these are the variables coming from Employee.js
        super(name,id,email);
        this.github = github;
        // this variable is unique to Engineer.js because it is the only script with a role that equals "Engineer"
        this.role = "Engineer";
    }
    // these methods are used within the test files
    getRole(){
    return this.role;
    }
    getGithub(){
        return this.github;
    }
};

// this is how other documents link to Engineer.js
module.exports = Engineer;