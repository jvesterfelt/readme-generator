// TODO: Include packages needed for this application
const { create } = require('domain');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array for testing:
const createTestReadme = () => {
    const testReadmeData = {
        name: 'Jamie Vesterfelt',
        email: 'jamievesterfelt@hotmail.com',
        username: 'jvesterfelt',
        project: 'readme-generator',
        repository: 'https://github.com/jvesterfelt/readme-generator',
        description: 'Simple node.js application designed to automatically generate a professional looking README.md file using the inquirer package. This is designed to demonstrate the capabilities of javascript to interact with both the file system and the user to generate content.',
        installation: '1. Verify that node.js is installed 2. clone the source files 3. install the inquirer package',
        usage: '1. Run the application from the root directory of the source files using "node index.js", screenshots provided in ./assets/images.',
        confirmLicense: true,
        license: 'MIT',
        testing: 'There is a second file created called testIndex.js. Run this file using "node testIndex.js" and a sample of the README.md file will be logged to the console.'
    };

    console.log('Markdown file: ', generateMarkdown(testReadmeData));
};

createTestReadme();