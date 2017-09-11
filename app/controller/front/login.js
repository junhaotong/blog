function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('../base.js');

module.exports = class extends Base {
    indexAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            let captchasController = _this.controller('front/captchas');
            let success = yield captchasController.validateCaptchas();
            if (success) {
                // 验证码二次验证通过
                let username = _this.post('username');
                let password = _this.post('password');
                let userService = _this.service('user');
                let user = yield userService.getUserByUsernameOREmail(username);
                if (!user.username) {
                    return _this.fail(2000, '用户不存在');
                }
                password = think.md5(password);
                if (password !== user.password) {
                    return _this.fail(2001, '密码错误');
                }
                let tokenController = _this.controller('token');
                let token = yield tokenController.newToken(user);
                return _this.success({ token: token }, '登录成功');
            } else {
                return _this.fail(1000, '验证码错误或已失效');
            }
        })();
    }
};