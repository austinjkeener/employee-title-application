const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function rosterOutput(){
    inquirer.prompt([
        {
            type: "input",
            message: "type in your name",
            name: "name"
        },
        {
            type: "list",
            message: "what is your role?",
            choices: ["manager", "intern", "engineer"],
            name: "role"
        },
        {
            type: "input",
            message: "enter in your id",
            name:"id"
        }
    ]).then(function(answers){
        roleQuestion(answers);
    })
}
function roleQuestion(answers){
let question;
console.log(answers.role);
if(answers.role === "engineer"){
    question = "link to github profile";
}else if (answers.role === "intern"){
    question = "school?";
} else if (answers.role === "manager"){
    question = "officer number";
}

inquirer.prompt([
    {
        type: "input",
        message: question,
        name: "specQuestion"
    }
]).then (function(response){
    console.log(response);
})

}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
rosterOutput();