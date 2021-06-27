// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge = (license) => {
    let badgeUrl = '';
    let licenseLink = '';

    if (license) {

        switch (license) {
            case 'MIT':
                console.log('license chosen: ', license);
                console.log('badge: https://img.shields.io/badge/license-MIT-brightgreen');
                badgeUrl = `![License Badge](https://img.shields.io/badge/license-MIT-brightgreen)`;
                licenseLink = `[MIT](https://choosealicense.com/licenses/mit/)`;
                break;

            case 'GNU':
                console.log('license chosen: ', license);
                console.log('badge: https://img.shields.io/badge/license-GNU-brightgreen');
                badgeUrl = `![License Badge](https://img.shields.io/badge/license-GNU-brightgreen)`;
                licenseLink = `[GNU](https://choosealicense.com/licenses/gpl-3.0/)`;
                break;

            case 'Mozilla Public License':
                console.log('license chosen: ', license);
                console.log('badge: https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-brightgreen');
                badgeUrl = `![License Badge](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-brightgreen)`;
                licenseLink = `[Mozilla Public License](https://choosealicense.com/licenses/mpl-2.0/)`;
                break;

            case 'No license':
                console.log('No license information chosen');
                badgeUrl = '';
                licenseLink = '';
                break;
        }

        return `${renderLicenseSection(badgeUrl, licenseLink)}`;
    } else {
        return '';
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
    if (license) {
        return `
        * [License](#License)`;
    } else {
        return '';
    }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license, licenseLink) => {
    if (license) {
        return `
        ## License
        ![${license}](${renderLicenseBadge(license)})

        [${license}](${licenseLink})
        `;
    } else {
        return '';
    }

};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (readmeData) => {
    return `# ${readmeData.project}

    ## Description
    ${readmeData.description}

    ## Table of Contents
    * [Installation] (#installation)
    * [Usage] (#usage)${renderLicenseLink(readmeData.license)}
    * [Contributing] (#credits)
    * [Testing] (#testing)
    * [Questions] (#Questions)
    
    ## Installation
    ${readmeData.installation}

    ## Usage
    ${readmeData.usage}

    ${renderLicenseBadge(readmeData.license)}

    ## Contributing
    To contribute to this project please review the Contributor Covenant Code of Conduct:
    [Contributor Covenant Code of Conduct ](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)

    ## Testing
    ${readmeData.testing}

    ## Questions
    Please direct all questions to Jamie Vesterfelt:
    Email: ${readmeData.email}
    GitHub: ${readmeData.username}


    Copyright (c) 2021 Jamie Vesterfelt
`;
}

module.exports = generateMarkdown;