const BaseRest = require('../rest.js');

module.exports = class extends BaseRest {
    async getAction() {
        let user_id = this.get('id');
        let userService = this.service('user');
        if (user_id) {
            // 用户详情
        } else {
            // 用户列表
            let page =  this.get('page');
            let userList = await userService.getUserList(page);
            return this.success(userList);
        }
    }
};
