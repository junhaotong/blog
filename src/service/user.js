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
        let user = this.User.getUserByUsername(username, 2);
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
        return this.User.addUser(user);
    }

    /**
     * 获取用户列表
     * @param page
     * @returns {*}
     */
    async getUserList(page = 1) {
        let userList = await this.User.getUserByType(1, page * 20);
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

    /**
     * 验证email是否已注册
     * @param email
     * @returns {Promise.<boolean>}
     */
    async checkEmail(email) {
        let user = await this.User.getUserbyEmail(email);
        if (user.id) return true;
        else return false;
    }

    /**
     * 验证用户名是否已注册
     * @param username
     * @returns {Promise.<boolean>}
     */
    async checkUserName(username) {
        let user = await this.User.getUserByUsername(username);
        if (user.id) return true;
        else return false;
    }

    /**
     * 通过用户名或邮箱获取用户
     * @param query
     * @returns {Promise.<Promise|*>}
     */
    async getUserByUsernameOREmail(query) {
        let user = await this.User.getUserByUsernameOREmail(query);
        return user;
    }
};
