// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'name',
        message: 'What is your name? (required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: (required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username: (required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'repository',
        message: 'Please enter the link to your project repository:'
    },
    {
        type: 'confirm',
        name: 'confirmDescription',
        message: 'Would you like to add a description?',
        default: true
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your application:',
        when: ({ confirmDescription }) => confirmDescription
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter instructions for installation:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information:'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which type of license would you like to use?',
        choices: ['MIT', 'GNU', 'Mozilla Public License', 'No license']
    },
    {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Would you like to add instructions for contributions?',
        default: false
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter instructions:',
        when: ({ confirmContribution }) => confirmContribution
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please enter instructions for testing your application: (required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please enter instructions for testing your application.');
                return false;
            }
        }
    }
]

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile('./' + fileName, data, 'utf8', err => {
        if (err) throw err;

        console.log('README.md generated!');
    });
};

// TODO: Create a function to initialize app
const questionsPrompt = questions => {
    const readmeData = [];

    return inquirer
        .prompt(questions)
        .then(questionsResponses => {
            readmeData.push(questionsResponses);
        });
};

// Function call to initialize app
questionsPrompt();