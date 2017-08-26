const Base = require('../base.js');

import crypto from 'crypto';
let jwt = require('jsonwebtoken');

module.exports = class extends Base {
    async indexAction() {
        let body = this.ctx.request.body.post;
        let username = body.username;
        let password = body.password;
        let userService = this.service('user');
        let user = await userService.getAdminByUsername(username);
        if (!user.username) {
            return this.fail(2000, '用户不存在');
        }
        let md5 = crypto.createHash('md5');
        md5.update(password);
        password = md5.digest('hex');
        if (password !== user.password) {
            return this.fail(2001, '密码错误');
        }
        let tokenData = {
            username: user.username,
            email: user.email,
            user_ID: user.id
        };
        tokenData = JSON.stringify(tokenData);
        md5 = crypto.createHash('md5');
        md5.update(tokenData);
        tokenData = md5.digest('hex');
        let token = jwt.sign({ data: tokenData}, 'Jeremy');
        let tokenService = this.service('token');
        let result = await tokenService.saveToken(token, user.id);
        this.cookie('userinfo',
            JSON.stringify({username: user.username, token: token}), {
                maxAge: 60000 * 12,
                httpOnly: false
        });
        return this.success({token: token}, '登录成功');
    }
};
