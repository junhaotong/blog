const Base = require('./base.js');
const execa = require('execa');

module.exports = class extends Base {
    indexAction() {
        let command = ['git reset --hard origin/master', 'git clean -f', 'git pull', 'npm install', 'npm run compile', 'pm2 reload all'].join('&&')
        execa.shell(command).then(result => {
            console.log(result);
        });
    }
};
