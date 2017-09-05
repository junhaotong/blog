module.exports = class extends think.Logic {
    indexAction() {
        this.rules = {
            geetest_challenge: {
                required: true,
                aliasName: '验证码'
            },
            geetest_validate: {
                required: true,
                aliasName: '验证码'
            },
            geetest_seccode: {
                required: true,
                aliasName: '验证码'
            },
            username: {
                required: true,
                aliasName: '用户名或邮箱'
            },
            password: {
                required: true,
                aliasName: '密码'
            }
        };
    }
};