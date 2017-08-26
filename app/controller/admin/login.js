var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('../base.js');

let jwt = require('jsonwebtoken');

module.exports = class extends Base {
    indexAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            let body = _this.ctx.request.body.post;
            let username = body.username;
            let password = body.password;
            let userService = _this.service('user');
            let user = yield userService.getAdminByUsername(username);
            if (!user.username) {
                return _this.fail(2000, '用户不存在');
            }
            let md5 = _crypto2.default.createHash('md5');
            md5.update(password);
            password = md5.digest('hex');
            if (password !== user.password) {
                return _this.fail(2001, '密码错误');
            }
            let tokenData = {
                username: user.username,
                email: user.email,
                user_ID: user.id
            };
            tokenData = JSON.stringify(tokenData);
            md5 = _crypto2.default.createHash('md5');
            md5.update(tokenData);
            tokenData = md5.digest('hex');
            let token = jwt.sign({ data: tokenData }, 'Jeremy');
            let tokenService = _this.service('token');
            let result = yield tokenService.saveToken(token, user.id);
            _this.cookie('userinfo', JSON.stringify({ username: user.username, token: token }), {
                maxAge: 60000 * 12,
                httpOnly: false
            });
            return _this.success({ token: token }, '登录成功');
        })();
    }
};