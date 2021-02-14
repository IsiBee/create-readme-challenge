const renderLicenseBadge = license => {
    let licenseSplit = license.split(" ");
    licenseSplit = licenseSplit[0] + '%20' + licenseSplit[1];
    return `
![${license} badge](https://img.shields.io/badge/license-${licenseSplit}-blue.svg)
    `
};

const renderLicenseInfo = license => {
    if (license === 'GNU GPLv3') {
        return `
This license makes the complete source code available, however contributors cannot distribute closed source versions.
        `;
    }
    else if (license === 'MIT License') {
        return `
This license allows contributors to make and distribute closed source versions of your project.
        `;
    }
    else {
        return `
This is a license with no conditions, and dedicates your work to the public domain.
        `;
    }
};

const generateMarkdown = readMeData => {
    const { title, description, installation, usage, license, contribution, tests, github, email } = readMeData;
    return `
# ${title}

${renderLicenseBadge(license)}

## Description
${description}
        
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
    ${installation}

## Usage
${usage}

## License
This project is covered under the ${license} license.

${renderLicenseInfo(license)}

---

## Contributing
${contribution}

## Tests
${tests}

## Questions
For more projects like this checkout my github at [${github}](https://github.com/${github}).
If you have additional questions about this or any other project you can reach me directly at ${email}.
    `;
};

module.exports = templateData => {
    return `
        ${generateMarkdown(templateData)}
   `;
};