// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const employee = require("./Employee");
const intern = require("./Intern");

class Intern extends Employee {
    constructor (name,roll,id,school,email){
        super(name,roll,id,email);
        this.school = school;
    }
};