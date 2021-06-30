// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge = (license) => {
    let badgeUrl = '';
    let licenseLink = '';

    if (license) {

        switch (license) {
            case 'MIT':
                badgeUrl = `![License Badge](https://img.shields.io/badge/license-MIT-brightgreen)`;
                licenseLink = `[MIT license details](https://choosealicense.com/licenses/mit/)`;
                break;

            case 'GNU':
                badgeUrl = `![License Badge](https://img.shields.io/badge/license-GNU-brightgreen)`;
                licenseLink = `[GNU license details](https://choosealicense.com/licenses/gpl-3.0/)`;
                break;

            case 'Mozilla Public License':
                badgeUrl = `![License Badge](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-brightgreen)`;
                licenseLink = `[Mozilla Public License license details](https://choosealicense.com/licenses/mpl-2.0/)`;
                break;

            case 'No license':
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
        return `\n* [License](#License)`;
    } else {
        return '';
    }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (badgeUrl, licenseLink) => {
    if (badgeUrl) {
        return `\n## License\n${badgeUrl}\n\n${licenseLink}`;
    } else {
        return '';
    }

};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (readmeData) => {
    return `\n# ${readmeData.project.toUpperCase()}
    \n## Description\n${readmeData.description}
    \n## Table of Contents\n* [Installation](#Installation)\n* [Usage](#Usage)${renderLicenseLink(readmeData.license)}\n* [Contributing](#Contributing)\n* [Testing](#Testing)\n* [Questions](#Questions)    
    \n## Installation\n${readmeData.installation}
    \n## Usage\n${readmeData.usage}
    \n#### Usage Screenshots:\n![Prompt Questions](./assets/images/prompt.jpg)
    \n#### Walkthrough video: \n![Walkthrough Video](./assets/videos/readme-generator-demo.webm)
    \n${renderLicenseBadge(readmeData.license)}
    \n## Contributing\nBefore contributing to this project please review the Contributor Covenant Code of Conduct:\n[Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)
    \n## Testing\n${readmeData.testing}
    \n## Questions
    \nPlease direct all questions to Jamie Vesterfelt:
    \nEmail: ${readmeData.email}
    \nGitHub: https://github.com/${readmeData.username}
    \nRepository: https://github.com/${readmeData.username}/${readmeData.repository}

    
    \nCopyright (c) 2021 ${readmeData.name}\n
`;
}

module.exports = generateMarkdown;