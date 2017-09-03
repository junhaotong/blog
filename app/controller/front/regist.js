function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('../base.js');

module.exports = class extends Base {
    indexAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            let userService = _this.service('user');
            let usernameStatus = yield userService.checkUserName(_this.post('username'));
            console.log(usernameStatus);

            if (usernameStatus) return _this.fail(1000, '用户名已注册');
            let emailStatus = yield userService.checkEmail(_this.post('email'));
            if (emailStatus) return _this.fail(1000, '邮箱已注册');
            let user_id = yield userService.addUser(_this.post('username'), _this.post('email'), think.md5(_this.post('password')), _this.post('avatar'), 1, 0);
            if (user_id) {
                return _this.success([], '注册成功');
            } else {
                return _this.fail(1000, '注册失败');
            }
        })();
    }
};