module.exports = class extends think.Service {
    /**
     * 通过用户名获取管理员
     * @param username
     */
    getAdminByUsername(username) {
        let userModel = this.model('user');
        let user = userModel.getUserByUsername(username, 2);
        return user;
    }
};