const inquirer = require('inquirer');
const fs = require('fs');
const readMePath = 'newRead/README.md';

if (fs.existsSync(readMePath)) {
    inquirer
        .prompt([
            {
                type: 'confirm',
                message: 'newRead/README.md already exists, only continue if you are okay with overwriting this file. Do you want to overwrite?',
                name: 'overwrite'
            }
        ])
        .then((response) => {
            if (response.overwrite === true) {
                readMeGen();
            } else {
                process.exit();
            }
        })
    }


function readMeGen() {    
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What would you like to title your README?',
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
            },
            {
                type: 'input',
                message: 'Enter your GitHub username',
                name: 'readmeUsername'
            },
            {
                type: 'input',
                message: 'Enter your contact Email address',
                name: 'readmeEmail'
            },
            {
                type: 'list',
                message: 'What license(s) would you like to add',
                choices: ['MIT', 'ACADEMIC_FREE', 'ECLIPSE_PUBLIC_1.0', 'Eclipse_Public_2.0', 'ISC', 'Microsoft Public'],
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
            const licenseBadge = `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;

            fs.appendFile('newRead/README.md', 
        `
# ${title}\n
## Table of Contents\n
${licenseBadge}\n
[Description](#${desc})\n
[Installation](#${readmeInst})\n
[Usage](#${usage})\n
[Contribution Guidelines](#${cont})\n
[Tests](#${tests})\n
[Questions](#Questions?)\n
[License(s)](#${license})\n
## Description\n
${desc}\n
## Installation\n
${readmeInst}\n
## Usage\n
${usage}\n
## Contribution guidelines\n
${cont}\n
## Tests\n
${tests}\n
## Questions?\n
Here's my GitHub: https://github.com/${username}\n
Here's my Email: [${email}](mailto:${email})\n
## License\n
${license}
        `, 
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
}