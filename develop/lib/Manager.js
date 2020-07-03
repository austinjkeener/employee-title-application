// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// this is how the Employee.js script is linked to Manager.js
const Employee = require("./Employee");

// This is the Manager.js class that helps with gathering information for testing and file system (fs) transfer to the webpage
class Manager extends Employee {
    // this constructor contains the information used within the webpage and is triggered when someone picks the role "manager"
    constructor (name,id,email,officeNumber){
        // these are variables that are pulled from Employee.js
        super(name,id,email);
        // officeNumber and role are local variables
        this.officeNumber = officeNumber;
        // when someone picks "Manager" as a role then the information within Manager.js is used
        this.role = "Manager";
    }
    //These methods are used within Manager.test.js
    getRole(){
        return this.role;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
};

// this is how other files are able to read Manager.js
module.exports = Manager;