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
            status,
        };
        let userModel = this.model('user');
        return userModel.addUser(user);
    }

    /**
     * 获取用户列表
     * @param page
     * @returns {*}
     */
    async getUserList(page = 1) {
        let userModel = this.model('user');
        let userList = await userModel.getUserByType(1, page * 20);
        return userList;
    }

    /**
     * 通过token获取用户
     * @param token
     * @returns {Promise.<Promise|*>}
     */
    async getUserByToken(token) {
        let user = await this.User.getUserByToken(token);
        return user;
    }
};
