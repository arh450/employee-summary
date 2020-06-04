const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const dTeamArr = [];

// 1. write employee class and export module (DONE)
// 2. extend employee class (engineer, manager, intern) and export modules (DONE)
// 3. create empty array for development team to be stored that will later be passed through when it is ttime to render to html.(DONE)
// 4. write prompt to create Mangaer (README notes development team consists of manager AND THEN any number of engineers and interns).

const mQuestions = [

    // MANAGER NAME
    {
        type: "input",
        message: "Enter your name",
        name: "name"
    },
    // ID
    {
        type: "input",
        message: "Enter your employee id",
        name: "id"
    },
    // EMAIL
    {
        type: "input",
        message: "Enter your email",
        name: "email"
    },
    // OFFICE NUMBER
    {
        type: "input",
        message: "Enter your office number",
        name: "officeNumber"
    },
];

const eQuestions = [
    // ENGINEER NAME
    {
        type: "input",
        message: "Enter your name",
        name: "name"
    },
    // ID
    {
        type: "input",
        message: "Enter your employee id",
        name: "id"
    },
    // EMAIL
    {
        type: "input",
        message: "Enter your email",
        name: "email"
    },
    // GITHUB
    {
        type: "input",
        message: "Enter your github username",
        name: "github"
    }
];

const iQuestions = [
    // INTERN NAME
    {
        type: "input",
        message: "Enter your name",
        name: "name"
    },
    // ID
    {
        type: "input",
        message: "Enter your employee id",
        name: "id"
    },
    // EMAIL
    {
        type: "input",
        message: "Enter your email",
        name: "email"
    },
    // SCHOOL
    {
        type: "input",
        message: "Enter where you went to school",
        name: "school"
    }
];

const selectQuestions = [
    // MEMBER SELECT
    {
        type: "list",
        message: "Select a new member for your team",
        name: "member",
        choices: [
            "Engineer",
            "Intern",
            "My team is complete"
        ]
    }
]

function teamManager() {
    inquirer.prompt(mQuestions).then((input) => {
        const manager = new Manager(
            input.name,
            input.id,
            input.email,
            input.officeNumber
        );
        dTeamArr.push(manager);
        console.log(`----------------------\n`);
        console.log(`${input.name} added to team. \n`);
        console.log(`----------------------\n`);
        addMember();
    }).catch((err) => {
        throw err;
    });
}

function addEngineer() {
    inquirer.prompt(eQuestions).then((input) => {
        const engineer = new Engineer(
            input.name,
            input.id,
            input.email,
            input.github
        );
        dTeamArr.push(engineer);
        console.log(`----------------------\n`);
        console.log(`${input.name} added to team. \n`);
        console.log(`----------------------\n`);
        addMember();
    }).catch((err) => {
        throw err;
    });
}

function addIntern() {
    inquirer.prompt(iQuestions).then((input) => {
        const intern = new Intern(
            input.name,
            input.id,
            input.email,
            input.school
        );
        dTeamArr.push(intern);
        console.log(`----------------------\n`);
        console.log(`${input.name} added to team. \n`);
        console.log(`----------------------\n`);
        addMember();
    }).catch((err) => {
        throw err;
    });
}

function addMember() {
    inquirer.prompt(selectQuestions).then(({ member }) => {
        if (member === "Engineer") {
            addEngineer();
        } else if (member === "Intern") {
            addIntern();
        } else {
            generateTeam();
        }
    }).catch((err) => {
        throw err;
    });
}

// check if the `output` folder exists and create it if it does not.

function generateTeam() {
    // fs.existsSync returns true if path exists, and false otherwise
    // set if statement so if output directory DOES NOT exist, then create folder using fs.mkdirsync
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    //   then write file using outputPath and render development team array to html
    fs.writeFileSync(outputPath, render(dTeamArr), "utf-8");
    console.log(`----------------------\n`);
    console.log(`TEAM GENERATED \n`);
    console.log(`----------------------\n`);
}

teamManager();

// Write code to use inquirer to gather information about the development team members, (DONE)
// and to create objects for each team member (using the correct classes as blueprints!) (DONE)

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
