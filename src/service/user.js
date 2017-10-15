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
            thumb_avatar,
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
        return user.id;
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

    /**
     *
     * @param id
     * @param avatar
     * @param username
     * @returns {*}
     */
    async updateUser(id, avatar, thumb_avatar, username) {
        let line = await this.User.updateUser(id, avatar, thumb_avatar, username);
        return line;
    }

    /**
     * 通过用户ID获取用户
     * @param id
     * @returns {*}
     */
    getUserById(id) {
        return this.User.getUserById(id);
    }

    /**
     * 修改密码
     * @param id
     * @param new_pwd
     * @returns {Promise.<Promise|*>}
     */
    async updatePassword(id, new_pwd) {
        let line = await this.User.updatePassword(id, new_pwd);
        return line;
    }

    async changeStatus(id) {
        let user = await this.User.getUserById(id);
        let newStatus;
        if (user.status === 0) {
            newStatus = -1;
        } else {
            newStatus = 0;
        }
        let line = await this.User.updateStatus(id, newStatus);
        if (line) {
            return newStatus;
        } else {
            throw new Error('更新失败');
        }
    }
};
