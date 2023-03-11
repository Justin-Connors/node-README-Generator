const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What would you like to name your README?',
            name: 'readmeTitle'
        },

    ])
    .then((response) => {

    })
    .catch((err) => {
        if(err.isTtyError) {
            console.log("invalid terminal");
        } else if (err.error()) {
            err.log(err.message());
        }

    });