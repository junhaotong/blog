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
        return this
            .join([{
            table: 'token',
            join: 'inner',
            as: 't',
            on: ['`user`.`id`', '`t`.`user_ID`']
        }])
            .where({
                't.token': token,
                'user.status': 0
            }).find();
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
        return this.where({type: type}).fieldReverse('password').limit(limit).select();
    }

    /**
     * 通过用户ID获取用户信息
     * @param id
     */
    getUserById(id) {
        return this.where({
            id: id,
            status: 0
        }).fieldReverse('password').find();
    }

    /**
     * 通过邮箱获取用户
     * @param email
     */
    getUserbyEmail(email) {
        return this.where({
            email: email,
            status: 0
        }).find();
    }

    /**
     * 通过用户名或邮箱获取用户
     * @param query
     */
    getUserByUsernameOREmail(query) {
        return this
            .where(`username = '${query}' OR email = '${query}' AND status = 0`)
            .where({
                status: 0
            })
            .find();
    }

    /**
     * 更新用户信息
     * @param id
     * @param avatar
     * @param username
     */
    updateUser(id, avatar, username) {
        return this
            .where({
                id: id
            })
            .update({
            avatar: avatar,
            username: username
        })
    }

    /**
     * 更新用户密码
     * @param id
     * @param new_pwd
     */
    updatePassword(id, new_pwd) {
        return this
            .where({
                id: id
            })
            .update({
                password: new_pwd
            })
    }

    /**
     * 更新用户status
     * @param id
     * @param new_status
     */
    updateStatus(id, new_status) {
        return this
            .where({
                id: id
            })
            .update({
                status: new_status
            })
    }
};
