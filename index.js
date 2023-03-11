const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What would you like to title your README?',
            name: 'readmeTitle'
        },
        {
            type: 'input',
            message: 'What would you like the description of your README be? Close the editor when you are done, ',
            name: 'readmeDescription'
        },
        {
            type: 'input',
            message: 'What would you like the installation instructions be for your README? Close the editor when you are done, ',
            name: 'readmeInstall'
        },
        {
            type: 'input',
            message: 'What would you like to add for usage to the README? Close the editor when you are done, ',
            name: 'readmeUsage'
        },
        {
            type: 'input',
            message: 'What would you like to add for the contribution guidelines to the README? Close the editor when you are done, ',
            name: 'readmeCont'
        },
        {
            type: 'input',
            message: 'What would you like to add for tests to the README? Close the editor when you are done, ',
            name: 'readmeTests'
        },
        {
            type: 'input;',
            message: 'Enter your GitHub username',
            name: 'readmeUsername'
        },
        {
            type: 'input;',
            message: 'Enter your contact Email address',
            name: 'readmeEmail'
        },
        {
            type: 'checkbox',
            message: 'What license(s) would you like to add',
            choices: ['MIT', 'Academic Free', 'Eclipse Public 1.0', 'Eclipse Public 2.0', 'ISC', 'Microsoft Public'],
            name: 'readmeLicense'
        }
    ])
    .then((response) => {
        const title = response.readmeTitle;
        const desc = response.readmeDescription;
        const readmeInst = response.readmeInstall;
        const usage = response.readmeUsage;
        const cont = response.readmeCont;
        const tests = response.readmeTests;
        const username = response.readmeUsername;
        const email = response.readmeEmail;
        const license = response.readmeLicense;

        fs.appendFile('newRead/README.md', 
        `# ${title}\n## Description\n${desc}\n## Installation\n${readmeInst}\n## Usage\n${usage}\n## Contribution guidelines\n${cont}\n## Tests\n${tests}\n## Questions!\nHere's my GitHub: ${username}\nHere's my Email: ${email}\n## License\n${license}`, 
        (err) => {
            if (err) {
                console.log(err);
            }
        })
    })
    .catch((err) => {
        if(err.isTtyError) {
            console.log("invalid terminal");
        }

    });
