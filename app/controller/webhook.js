const Base = require('./base.js');
const execa = require('execa');

module.exports = class extends Base {
    indexAction() {
        let command = ['git reset --hard origin/master', 'git clean -f', 'git pull', 'npm install'].join('&&');
        execa.shell(command).then(result => {
            console.log('更新成功!');
        });
    }
};
//# sourceMappingURL=webhook.js.map