const Base = require('../base.js');

module.exports = class extends Base {
    indexAction() {
        return this.display();
    }

    /**
     * 获取用户信息
     */
    userinfoAction() {
        let user = this.ctx.user;
        return this.success(user, '获取成功!');
    }

    /**
     * 保存用户信息
     */
    async saveInfoAction() {
        let user = this.ctx.user;
        let username = this.post('username');
        let avatar = this.post('avatar');

        let userService = this.service('user');
        let checkUsername = await userService.checkUserName(username);
        if (checkUsername && checkUsername != user.user_ID) return this.fail(this.config('defaultErrno'), '用户名已存在');
        let success = await userService.updateUser(user.user_ID, avatar, username);
        if (success) {
            let newUser = await userService.getUserById(user.user_ID);
            return this.success(newUser, '更新成功')
        } else {
            return this.fail(this.config('defaultErrno'), '更新失败');
        }
    }
};
