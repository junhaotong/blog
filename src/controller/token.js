const Base = require('./base.js');
const jwt = require('jsonwebtoken');

module.exports = class extends Base {
    async newToken(user) {
        let tokenData = {
            username: user.username,
            email: user.email,
            user_ID: user.id
        };
        tokenData = JSON.stringify(tokenData);
        tokenData = think.md5(tokenData);
        let token = jwt.sign({ data: tokenData}, 'Jeremy');
        let tokenService = this.service('token');
        let result = await tokenService.saveToken(token, user.id);
        if (result) {
            this.cookie('userinfo',
                JSON.stringify({username: user.username, token: token}), {
                    // maxAge: 360000 * 12,
                    httpOnly: false
                });
            return token;
        } else {
            return this.fail(1000, '登录失败');
        }
    }
};
