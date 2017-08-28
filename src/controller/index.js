const Base = require('./base.js');

module.exports = class extends Base {
    adminAction() {
        return this.display('admin');
    }
};
