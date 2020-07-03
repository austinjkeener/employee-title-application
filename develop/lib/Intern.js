// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// calls Employee.js for usage within Intern.js
const Employee = require("./Employee");

// this is the class for intern. it extends employee and grabs data for it for usage within intern.js
class Intern extends Employee {
    // the constructor contains variables used within the test
    constructor (name,id,email,school){
        //the super is where information from Employee.js is coming in from
        super(name,id,email);
        //school and roll are local variables
        this.school = school;
        // "Intern" is being used uniquely for Intern.js to specify the role that triggers the Intern.js information
        this.role = "Intern";
    }
    // these methods are used within the testing
    getRole(){
        return this.role;
    }
    getSchool(){
        return this.school;
    }
};

// this is how other documents are linked to the Intern.js file
module.exports = Intern;