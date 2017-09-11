function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('./base.js');
const jwt = require('jsonwebtoken');

module.exports = class extends Base {
    newToken(user) {
        var _this = this;

        return _asyncToGenerator(function* () {
            let tokenData = {
                username: user.username,
                email: user.email,
                user_ID: user.id
            };
            tokenData = JSON.stringify(tokenData);
            tokenData = think.md5(tokenData);
            let token = jwt.sign({ data: tokenData }, 'Jeremy');
            let tokenService = _this.service('token');
            let result = yield tokenService.saveToken(token, user.id);
            if (result) {
                _this.cookie('userinfo', JSON.stringify({ username: user.username, token: token }), {
                    maxAge: 360000 * 12,
                    httpOnly: false
                });
                return token;
            } else {
                return _this.fail(1000, '登录失败');
            }
        })();
    }
};