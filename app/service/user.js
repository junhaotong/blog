function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const moment = require('moment');

module.exports = class extends think.Service {
    constructor(props) {
        super(props);
        this.User = this.model('user');
    }
    /**
     * 通过用户名获取管理员
     * @param username
     */
    getAdminByUsername(username) {
        let userModel = this.model('user');
        let user = userModel.getUserByUsername(username, 2);
        return user;
    }

    /**
     * 新增用户
     * @param username
     * @param email
     * @param password
     * @param avatar
     * @param type
     * @param status
     */
    addUser(username, email, password, avatar, type, status) {
        let user = {
            username,
            email,
            password,
            avatar,
            create_at: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
            type,
            status
        };
        let userModel = this.model('user');
        return userModel.addUser(user);
    }

    /**
     * 获取用户列表
     * @param page
     * @returns {*}
     */
    getUserList(page = 1) {
        var _this = this;

        return _asyncToGenerator(function* () {
            let userModel = _this.model('user');
            let userList = yield userModel.getUserByType(1, page * 20);
            return userList;
        })();
    }

    /**
     * 通过token获取用户
     * @param token
     * @returns {Promise.<Promise|*>}
     */
    getUserByToken(token) {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            let user = yield _this2.User.getUserByToken(token);
            return user;
        })();
    }
};