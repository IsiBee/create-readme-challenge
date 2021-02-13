const inquirer = require('inquirer');

const writeFile = require('./utils/generate-readme');

const generateReadMe = require('./src/readme-template');

const mockData = {
    title: 'Isabelle is King',
    description: 'I rule the world now',
    installation: 'Sitting on a throne',
    usage: 'For good',
    license: 'licenseC',
    contribution: '10 mil per subject',
    tests: 'do not test me',
    github: 'janehub',
    email: '123@gmail.com'
};


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

promptReadMe()
    .then(readMeData => {
        return generateReadMe(readMeData);
    })
    .then(readMe => writeFile(readMe))
    .catch(err => console.log(err));