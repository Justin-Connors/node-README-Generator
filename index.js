const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What would you like to name your README?',
            name: 'readmeTitle'
        },
        {
            type: 'input',
            message: 'What would you like the description of your README be?',
            name: 'readmeDescription'
        },
        {
            type: 'input',
            message: 'What would you like the installation instructions be for your README?',
            name: 'readmeInstall'
        },
        {
            type: 'input',
            message: 'What would you like to add for usage to the README?',
            name: 'readmeUsage'
        },
        {
            type: 'input',
            message: 'What would you like to add for the contribution guidelines to the README?',
            name: 'readmeCont'
        },
        {
            type: 'input',
            message: 'What would you like to add for tests to the README?',
            name: 'readmeTests'
        }
    ])
    .then((response) => {
        
    })
    .catch((err) => {
        if(err.isTtyError) {
            console.log("invalid terminal");
        }

    });