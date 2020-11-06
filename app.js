const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
}

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What kind of employee would you like to add next?',
            choices: ["Engineer", "Intern"],
        },
    ]).then(choice => {
        switch (choice.role) {
            case "Engineer":
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "Enter engineer's name"
                    },
                    {
                        type: "number",
                        name: "id",
                        message: "Enter engineer's ID number",
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "Enter engineer's email",
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "Enter engineer's GitHub username",
                    },
                    {
                        type: "confirm",
                        name: "addAnother",
                        message: "Do you need to add another employee?",
                    }
                ]).then(engineer => {
                    if (engineer.addAnother === true) {
                        addEmployee();
                    } else {
                        return
                    }
                })
                break;
            case "Intern":
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "Enter intern's name"
                    },
                    {
                        type: "number",
                        name: "id",
                        message: "Enter intern's ID number",
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "Enter intern's email",
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "Enter intern's school name",
                    },
                    {
                        type: "confirm",
                        name: "addAnother",
                        message: "Do you need to add another employee?",
                    }
                ]).then(intern => {
                    if (intern.addAnother === true) {
                        addEmployee();
                    }
                    else {
                        return;
                    }
                })
                break;
            default:
                break;
        }
    })
}

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter your name"
    },
    {
        type: "number",
        name: "id",
        message: "Enter your ID number",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email",
    },
    {
        type: "number",
        name: "officeNumber",
        message: "Enter your office number",
    }
]).then(manager => {
    addEmployee();

})


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
