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
        delete user.password;
        delete user.status;
        delete user.type;
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

    /**
     * 修改账号密码
     */
    changePasswordAction() {
        let user = this.ctx.user;
        if (think.md5(this.post('old_password')) !== user.password) return this.fail(this.config('defaultErrno'),'旧密码不正确');
        let userService = this.service('user');
        let status = userService.updatePassword(user.user_ID, think.md5(this.post('new_password')));
        if (status) {
            let tokenService = this.service('token');
            let line = tokenService.deleteToken(user.user_ID);
            return this.success({}, '修改成功,请重新登录');
        } else {
            return this.fail(this.config('defaultErrno'), '修改失败');
        }
    }
};
