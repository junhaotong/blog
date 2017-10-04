const Base = require('../base.js');

module.exports = class extends Base {
    async indexAction() {
        let userService = this.service('user');
        let usernameStatus = await userService.checkUserName(this.post('username'));

        if (usernameStatus) return this.fail(1000, '用户名已注册');
        let emailStatus = await userService.checkEmail(this.post('email'));
        if (emailStatus) return this.fail(1000, '邮箱已注册');

        let codeService = this.service('code');
        let code = await codeService.getCodeByEmail(this.post('email'));

        if (code.code === this.post('code')) {
            let user_id = await userService.addUser(this.post('username'), this.post('email'), think.md5(this.post('password')), this.post('avatar'), 1, 0);
            if (user_id) {
                return this.success({}, '注册成功');
            } else {
                return this.fail(1000, '注册失败');
            }
        } else {
            return this.fail(1000, '验证码错误');
        }
    }
};
