//will work on this ASAP. Get some rest sir. A little each day. You've got this. 

const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const fs = require("fs");
const path = require("path");

const DIST_DIR = path.resolve(__dirname, "dist");
const DIST_PATH = path.join(DIST_DIR, "team.html")

const template = require("./src/template");

const newTeamArray = [];

function init(){
    console.log("Welcome to your team profile generator!")
    createManager()
}

function createManager(){
    inquirer.prompt([
        {
           type: "input" ,
           name: "managerName",
           message: "What is your name?"
        },
        {
            type: "input" ,
            name: "managerId",
            message: "What is your Id?"
         },
         {
            type: "input" ,
            name: "managerEmail",
            message: "What is your Email?"
         },
         {
            type: "input" ,
            name: "managerNumber",
            message: "What is your office number?"
         }
    ]).then((managerAnswers)=>{
       
        const manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.managerNumber)

        newTeamArray.push(manager)

        mainMenu()
    })
}

function mainMenu(){
    inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            message: "Would you like to add another team member?",
            choices: [ "Add Engineer", "Add Intern", "Add Manager", "I dont want to add anymore members"]
        }
    ]).then((answer)=>{
        let choice = answer.userChoice;

        switch(choice){
            case "Add Engineer":
                // createEngineer()
                console.log("fire off createEngineer")
            break;
            case "Add Intern":
                // createIntern()
                console.log("fire off createIntern")
            break;
            case "Add Manager":
                createManager()
            break;
            default:
                 buildTeam()
                 console.log("fire off buildTeam()")
        }

    })
}

function buildTeam(){
    if(!fs.existsSync(DIST_DIR)){
        fs.mkdirSync(DIST_DIR)
    }
    fs.writeFileSync(DIST_PATH, template(newTeamArray), "utf-8")
}


// follow the flow of createManager for engineer and intern

init()