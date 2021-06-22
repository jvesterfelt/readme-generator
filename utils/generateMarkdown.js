// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (readmeData) => {
    if (readmeData) {
        let licenseLink = '';
        let badgeUrl = '';

        switch (readmeData.license) {
            case 'MIT':
                console.log('license chosen: ', readmeData.license);
                console.log('badge: https://img.shields.io/badge/license-MIT-brightgreen');
                badgeUrl = `![License Badge] (https://img.shields.io/badge/license-MIT-brightgreen)`;
                licenseLink = `[MIT] (https://choosealicense.com/licenses/mit/)`;
                break;

            case 'GNU':
                console.log('license chosen: ', readmeData.license);
                console.log('badge: https://img.shields.io/badge/license-GNU-brightgreen');
                badgeUrl = `![License Badge](https://img.shields.io/badge/license-GNU-brightgreen)`;
                licenseLink = `[GNU] (https://choosealicense.com/licenses/gpl-3.0/)`;
                break;

            case 'Mozilla Public License':
                console.log('license chosen: ', readmeData.license);
                console.log('badge: https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-brightgreen');
                badgeUrl = `![License Badge] (https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-brightgreen)`;
                licenseLink = `[Mozilla Public License] (https://choosealicense.com/licenses/mpl-2.0/)`;
                break;

            case 'No license':
                console.log('No license information chosen');
                badgeUrl = '';
                licenseLink = '';
                break;
        }

    }
    // return badgeUrl, licenseLink;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// const renderLicenseLink = (readmeData) => {
//     if (readmeData) {
//         let licenseLink = `

//         * [License] (#License)
//         `
//         return licenseLink;
//     } else {
//         let licenseLink = '';
//         return licenseLink;
//     }
// };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (readmeData) => {
    if (readmeData) {
        return `
        ## License
        ${badgeUrl}


        `
    }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
    return `# ${readmeData.title}

    ## Description
    ${readmeData.description}

    ## Table of Contents
    * [Installation] (#installation)
    * [Usage] (#usage)
    * 
    * [Contributing] (#credits)
    * [Testing] (#testing)
    * [Questions] (#Questions)
    
    ## Installation
    ${readmeData.installation}

    ## Usage
    ${readmeData.usage}



    ## Contributing
    ${readmeData.contribution}

    ## Testing
    ${readmeData.testing}

    ## Questions
    ${readmeData.questions}
`;
}

module.exports = generateMarkdown;