// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (readmeData) => {
    if (readmeData) {
        switch (readmeData.license) {
            case 'MIT':
                console.log('license chosen: ', readmeData.license);
                console.log('badge: https://img.shields.io/badge/license-MIT-brightgreen');
                let badgeUrl = 'https://img.shields.io/badge/license-MIT-brightgreen';
                break;

            case 'GNU':
                console.log('license chosen: ', readmeData.license);
                console.log('badge: https://img.shields.io/badge/license-GNU-brightgreen');
                let badgeUrl = 'https://img.shields.io/badge/license-GNU-brightgreen';
                break;

            case 'Mozilla Public License':
                console.log('license chosen: ', readmeData.license);
                console.log('badge: https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-brightgreen');
                let badgeUrl = 'https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-brightgreen';
                break;

            case 'No license':
                console.log('No license information chosen');
                let badgeUrl = '';
                break;
        }
        return badgeUrl;
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

`;
}

module.exports = generateMarkdown;