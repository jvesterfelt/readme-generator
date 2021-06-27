// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    console.log('Start prompt.');

    return inquirer
        .prompt([{
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
                type: 'input',
                name: 'description',
                message: 'Enter a description of your application:'
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
                type: 'confirm',
                message: 'Would you like to select a license?',
                name: 'confirmLicense',
                default: true
            },
            {
                type: 'list',
                name: 'license',
                message: 'Which type of license would you like to use?',
                choices: ['MIT', 'GNU', 'Mozilla Public License', 'No license'],
                when: ({ confirmLicense }) => {
                    if (confirmLicense) {
                        return true
                    } else {
                        return false
                    }
                }
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
        ])
        .then(readmeData => {
            return readmeData;
        });
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile('./' + fileName, data, 'utf8', err => {
        if (err) throw err;

        console.log('README.md generated!');
    });
};


// Function call to initialize app
questions()
    .then(readmeData => {
        // console.log('responses', readmeData);
        return generateMarkdown(readmeData);
    })
    .then(markdownFile => {
        console.log('markdown file: ', markdownFile);
        writeToFile('README.md', markdownFile);
    })
    .catch(err => console.log('Error', err));