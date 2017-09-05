module.exports = class extends think.Logic {
    indexAction() {
        //  只允许 POST 请求类型
        this.allowMethods = 'post';
        let rules = {
            username: {
                string: true,
                required: true
            },
            password: {
                string: true,
                required: true,
                length: { min: 6, max: 20 }
            }
        };

        let messages = {
            username: '用户名不能为空',
            password: {
                length: '密码应为6-20位'
            }
        };

        let flag = this.validate(rules, messages);
        if (!flag) {
            return this.fail('登录失败', this.validateErrors);
        }
    }
};
//# sourceMappingURL=login.js.map