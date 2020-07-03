// TODO: Write code to define and export the Employee class

// this is the employee class with a constructor. Engineer.js, Intern.js, and Manager.js are extended back to this file for its methods.
class Employee {
    constructor (name, id, email) {
        //these are variables
        this.name = name;
        //this is a unique variable to the employee.js script
        this.role = "Employee";
        this.id = id;
        this.email = email;
    }
    //these are methods that are used within the employee.test.js class
        getName(){
        return this.name;
    }
        getId(){
        return this.id;
    } 
       getEmail(){
        return this.email;
    }
        getRole(){
        return this.role;
    }
};

//this is how other files can read the Employee class
module.exports = Employee;