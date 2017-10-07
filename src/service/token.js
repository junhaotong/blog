module.exports = class extends think.Service {
    /**
     * 保存token
     * @param token
     * @param user_ID
     * @returns {Promise.<T>|*}
     */
    saveToken(token, user_ID) {
        let tokenModel = this.model('token');
        return tokenModel.saveToken(token, user_ID)
            .then(result => {
                return true;
            }, err => {
                return false;
            })
            .catch(err => {
                return false;
            })
    }

    /**
     * 删除token
     * @param user_ID
     * @returns {*}
     */
    deleteToken(user_ID) {
        let tokenModel = this.model('token');
        return tokenModel.deleteToken(user_ID);
    }
};
