module.exports = class extends think.Model {
    /**
     * 保存token
     * @param token
     * @param user_ID
     * @returns {id}
     */
    saveToken(token, user_ID) {
        return this.thenUpdate({token: token, user_ID: user_ID}, {user_ID: user_ID});
    }

    /**
     * 删除token
     * @param user_ID
     */
    deleteToken(user_ID) {
        return this.where({user_ID: user_ID}).delete();
    }
};
