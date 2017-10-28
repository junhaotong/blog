const Base = require('./base.js');

module.exports = class extends Base {
    async indexAction() {
        return this.display('index');
    }
    adminAction() {
        return this.display('admin');
    }
};
