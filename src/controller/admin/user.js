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

    /**
     * 更改用户status
     * @returns {Promise.<void>}
     */
    async changeStatusAction() {
        let user_id = this.post('id');
        let userService = this.service('user');
        let new_status = await userService.changeStatus(user_id);
        return this.success({status: new_status}, '更新成功');
    }
};
