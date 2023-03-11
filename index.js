const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What would you like to name your README?',
            name: 'readmeTitle'
        },
        {
            type: 'editor',
            message: 'What would you like the description of your README be? Close the editor when you are done',
            name: 'readmeDescription'
        },
        {
            type: 'editor',
            message: 'What would you like the installation instructions be for your README? Close the editor when you are done',
            name: 'readmeInstall'
        },
        {
            type: 'editor',
            message: 'What would you like to add for usage to the README? Close the editor when you are done',
            name: 'readmeUsage'
        },
        {
            type: 'editor',
            message: 'What would you like to add for the contribution guidelines to the README? Close the editor when you are done',
            name: 'readmeCont'
        },
        {
            type: 'editor',
            message: 'What would you like to add for tests to the README? Close the editor when you are done',
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
