// glocbal require's
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js')

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
    validate: installationInput =>
}]