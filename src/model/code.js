module.exports = class extends think.Model {
    /**
     * 获取验证码by Code
     * 用于查询验证码是否存在
     * @param code
     */
    getCodeByCode(code) {
        return this.where({code: code}).find();
    }

    /**
     * 保存验证码
     * @param data
     * @returns {Promise}
     */
    saveCode(data) {
        return this.thenUpdate(data, {email: data.email});
    }

    /**
     * 通过邮箱获取验证码
     * @param email
     */
    getCodeByEmail(email) {
        return this.where({email: email}).find();
    }
};
