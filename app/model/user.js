module.exports = class extends think.Model {
    get relation() {
        return {
            token: {
                type: think.Model.HAS_ONE
            }
        };
    }

    /**
     * 通过用户名获取用户
     * @param username
     * @param type
     * @returns {Promise|T}
     */
    getUserByUsername(username, type) {
        let query = {};
        if (username) query['username'] = username;
        if (type) query['type'] = type;
        return this.where(query).find();
    }

    /**
     * 通过token获取用户
     * @param token
     */
    getUserByToken(token) {
        return this.join([{
            table: 'token',
            join: 'inner',
            as: 't',
            on: ['`user`.`id`', '`t`.`user_ID`']
        }]).where({ 't.token': token }).find();
    }

    /**
     * 添加用户
     * @param user
     * @returns {Promise|*}
     */
    addUser(user) {
        return this.add(user);
    }

    /**
     * 通过type查询用户列表
     * @param type
     * @param limit
     */
    getUserByType(type, limit) {
        return this.where({ type: type }).fieldReverse('password').limit(limit).select();
    }

    /**
     * 通过用户ID获取用户信息
     * @param id
     */
    getUserById(id) {
        return this.where({ id: id }).find();
    }

    /**
     * 通过邮箱获取用户
     * @param email
     */
    getUserbyEmail(email) {
        return this.where({ email: email }).find();
    }
};