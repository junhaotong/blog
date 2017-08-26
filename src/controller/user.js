const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {
    async getAction() {
        let user = this.model('user');
        let data = await user.getList();
        return this.success({msg: data});
    }
};
