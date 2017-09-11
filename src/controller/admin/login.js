const Base = require('../base.js');

module.exports = class extends Base {
    async indexAction() {
        let username = this.post('username');
        let password = this.post('password');
        let userService = this.service('user');
        let user = await userService.getAdminByUsername(username);
        if (!user.username) {
            return this.fail(2000, '用户不存在');
        }
        password = think.md5(password);
        if (password !== user.password) {
            return this.fail(2001, '密码错误');
        }
        let tokenController = this.controller('token');
        let token = await tokenController.newToken(user);
        // let tokenData = {
        //     username: user.username,
        //     email: user.email,
        //     user_ID: user.id
        // };
        // tokenData = JSON.stringify(tokenData);
        // tokenData = think.md5(tokenData);
        // let token = jwt.sign({ data: tokenData}, 'Jeremy');
        // let tokenService = this.service('token');
        // let result = await tokenService.saveToken(token, user.id);
        return this.success({token: token}, '登录成功');
    }
};
