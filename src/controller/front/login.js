const Base = require('../base.js');

module.exports = class extends Base {
    async indexAction() {
        let captchasController = this.controller('front/captchas');
        let success = await captchasController.validateCaptchas();
        if (success) {
            // 验证码二次验证通过
            let username = this.post('username');
            let password = this.post('password');
            let userService = this.service('user');
            let user = await userService.getUserByUsernameOREmail(username);
            if (!user.username) {
                return this.fail(2000, '用户不存在');
            }
            password = think.md5(password);
            if (password !== user.password) {
                return this.fail(2001, '密码错误');
            }
            let tokenController = this.controller('token');
            let token = await tokenController.newToken(user);
            user['token'] = {
                token: token
            }
            delete user.password;
            delete user.type;
            delete user.status;
            return this.success(user, '登录成功');
        } else {
            return this.fail(1000, '验证码错误或已失效');
        }
    }
};
