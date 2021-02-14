const inquirer = require('inquirer');

const writeFile = require('./utils/writeMarkdown');

const generateMarkdown = require('./src/generateMarkdown');


const promptReadMe = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter the title of your project.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter a description for your project: '

            },
            {
                type: 'input',
                name: 'installation',
                message: 'Enter installation instructions for your project: '
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Enter usage information for your project:'
            },
            {
                type: 'list',
                name: 'license',
                message: 'Select a license for your project:',
                choices: ['GNU GPLv3', 'MIT License', 'The Unlicense']
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'Enter your contribution guidelines:'
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Enter testing instructions for your project:'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your github username:'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address:',
                validate: emailInput => {
                    if (emailInput.includes('@')) {
                        return true;
                    }
                    else {
                        console.log('Please enter a valid email address.');
                        return false;
                    }
                }
            }
        ]);
};

promptReadMe()
    .then(readMeData => {
        return generateMarkdown(readMeData);
    })
    .then(readMe => writeFile(readMe))
    .then(writeFileResponse => console.log(writeFileResponse.message))
    .catch(err => console.log(err));