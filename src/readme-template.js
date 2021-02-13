const generateReadMe = readMeData => {
    const { title, description, installation, usage, license, contribution, tests, github, email } = readMeData;
    return `
        # ${title}

        ## Description
        ${description}
        
        ## Table of Contents

        ## Installation
        ${installation}

        ## Usage
        ${usage}

        ## License
        ${license}

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
        ${generateReadMe(templateData)}
   `;
};