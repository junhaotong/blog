const Base = require('./base.js');

module.exports = class extends Base {
    indexAction() {
        return this.display('index');
    }
    adminAction() {
        return this.display('admin');
    }
};