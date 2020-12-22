/**
 * Re-doing the app page
 */

//required documents that need to be linked to app.js
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//empty array for the user input to go into
const employees = [];

// printing to html page
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// this is how information is translated to the html renderer so that it can print onto the webpage
const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members, and to create objects for each team member (using the correct classes as blueprints!)
function userQuestions(role) {
  if (role === "Engineer") {
    inquirer
      .prompt([
        // each one of these is a different set of keypairs used to gather the information that the user puts in
        {
          type: "input",
          message: "type in your name",
          name: "name",
        },
        {
          type: "input",
          message: "type in your id",
          name: "id",
        },
        {
          type: "input",
          message: "type in your email",
          name: "email",
        },
        {
          type: "input",
          message: "type in your github",
          name: "gitHub",
        },
      ])
      .then((response) => {
        engineer = new Engineer(
          response.name,
          response.id,
          response.email,
          response.gitHub
        );
        employees.push(engineer);
        keepGoing();
      });
  } else if (role === "Intern") {
    inquirer
      .prompt([
        // each one of these is a different set of keypairs used to gather the information that the user puts in
        {
          type: "input",
          message: "type in your name",
          name: "name",
        },
        {
          type: "input",
          message: "type in your id",
          name: "id",
        },
        {
          type: "input",
          message: "type in your email",
          name: "email",
        },
        {
          type: "input",
          message: "enter school name",
          name: "school",
        },
      ])
      .then((response) => {
        intern = new Intern(
          response.name,
          response.id,
          response.email,
          response.school
        );
        employees.push(intern);
        keepGoing();
      });
  } else if (role === "Manager") {
    inquirer
      .prompt([
        // each one of these is a different set of keypairs used to gather the information that the user puts in
        {
          type: "input",
          message: "type in your name",
          name: "name",
        },
        {
          type: "input",
          message: "type in your id",
          name: "id",
        },
        {
          type: "input",
          message: "type in your email",
          name: "email",
        },
        {
          type: "input",
          message: "type in your office number",
          name: "officeNumber",
        },
      ])
      .then((response) => {
        manager = new Manager(
          response.name,
          response.id,
          response.email,
          response.officeNumber
        );
        employees.push(manager);
        keepGoing();
      });
  }
}

function initialPrompt() {
  inquirer
    .prompt([
      // each one of these is a different set of keypairs used to gather the information that the user puts in
      {
        type: "list",
        message: "What is your role?",
        choices: ["Engineer", "Intern", "Manager"],
        name: "role",
      },
    ])
    .then((response) => {
      userQuestions(response.role);
    });
}
function keepGoing() {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Do you want to add another employee?",
        name: "continue",
      },
    ])
    .then((response) => {
      if (response.continue === true) {
        initialPrompt();
      } else {
        const finished = render(employees);
        fs.writeFile(outputPath, finished, function (err, data) {
          if (err) {
            throw err;
          }
        });
      }
    });
}
initialPrompt();
// After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee! Use a .then promise here.

// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location. Hint: you may need to check if the `output` folder exists and create it if it does not.
