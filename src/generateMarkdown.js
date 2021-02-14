const renderLicenseBadge = license => {
    let licenseSplit = license.split(" ");
    licenseSplit = licenseSplit[0] + '%20' + licenseSplit[1];
    return `
![${license} badge](https://img.shields.io/badge/license-${licenseSplit}-blue.svg)
    `
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

---

## Contributing
${contribution}

## Tests
${tests}

## Questions
For more information checkout my github at ${github}, or if you have additional questions you can reach me at ${email}.
    `;
};

module.exports = templateData => {
    console.log(templateData);
    return `
        ${generateMarkdown(templateData)}
   `;
};