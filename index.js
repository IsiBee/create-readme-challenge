const inquirer = require('inquirer');

const promptUser = () => {
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
                type: 'checkbox',
                name: 'license',
                message: 'Select a license for your project:',
                choices: ['licenseA', 'licenseB', 'licenseC']
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
                message: 'Enter your email address:'
            }
        ]);
};