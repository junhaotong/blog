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
        return this.where({ username: username, type: type }).find();
    }

    getUserByToken(token) {}
};