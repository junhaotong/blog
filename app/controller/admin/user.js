function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const BaseRest = require('../rest.js');

module.exports = class extends BaseRest {
    getAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            let user_id = _this.get('id');
            let userService = _this.service('user');
            if (user_id) {
                // 用户详情
            } else {
                // 用户列表
                let page = _this.get('page');
                let userList = yield userService.getUserList(page);
                return _this.success(userList);
            }
        })();
    }
};