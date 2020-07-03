//required documents that need to be linked to app.js
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// i do not know what to use the below two lines for so i am commending them out for now.
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// this is how information is translated to the html renderer so that it can print onto the webpage
const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// this is where npm inquirer is used. the whole point of rosterOutput is to print information within the cli for the user to fill out so that it can be translated via file system onto a web page for others to view.
function rosterOutput(){
    inquirer.prompt([
        // each one of these is a different set of keypairs used to gather the information that the user puts in
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
        // this is the promise to the inquirer function. within this function a link is made to transfer the information gathered into the next part of the code so that all data can be printed to the webpage.
    ]).then(function(answers){
        roleQuestion(answers);
        
    })
}
//this function is used to determine which 'card' the information will be sent to. if the user picks engineer as a role, for example, then the card that is generated will be one for an engineer.
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

// inquirer.prompt([
//     {
//         type: "input",
//         message: question,
//         name: "specQuestion"
//     }
// ]).then (function(response){
//     console.log(response);
// })

}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

render(employees);

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