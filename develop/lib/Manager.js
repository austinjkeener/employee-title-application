// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const employee = require("./Employee");
const manager = require("./Manager");

class Manager extends Employee {
    constructor (name,roll,id,office,email){
        super(name,roll,id,email);
        this.office = office;
    }
};