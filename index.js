// glocbal require's
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// array of questions
const questions = [
    //project Name
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('you need a title');
                return false;
            }
        }
    },
    // project description
{
    type: 'input',
    name: 'description',
    message: 'provide a description',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('you need a description!');
            return false;
        }
    }
},
//installatiob instructions
{
    type: 'input',
    name: 'installation',
    message: 'How do you install the project?',
    validate: installationInput => {
        if(installationInput) {
            return true;
        } else {
            console.log('you need to provide installation info');
            return false;
        }
    }
},
//usage info
{
    type: 'input',
    name: 'usage',
    message: 'Gow do you ise this project?',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('you need to provide information on how to use the project');
            return false;
        }
    }
},
//CONTRIBUTION GUIDLINES
{
    type: 'input',
    name: 'contribution',
    message: 'how should people contribute to this prokect?',
    validate: contributionInput => {
        if (contributionInput) {
            return true;
        } else {
            console.log('You need to provide information on how to contribute to the project!');
            return false;
        }
    }
},
// test instructions
{
    type: 'input',
    name: 'testing',
    message: 'how do you test this project?',
    validate: testingInput => {
        if (testingInput) {
            return true;
        } else {console.log('you need to describe how to test this project!')
    return false;
}
    }
}, 
// Github Username
{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username!');
            return false;
        }
    }
},
{
    type: 'list',
    name: 'license',
    message: 'What license should your project have?',
   choices: ['Apache 2.0', 'IBM', 'MIT', 'None']
}];
//function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,(err) => {
        if (err)
        throw err;
        console.log('success information transfered to readme');
    });
};

//function to initalize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    })
}

//call function to initalize app
init();