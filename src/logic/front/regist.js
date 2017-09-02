module.exports = class extends think.Logic {
    indexAction() {
        this.rules = {
            username: {
                string: true,
                required: true,
                trim: true,
                aliasName: '用户名'
            },
            email: {
                required: true,
                email: true,
                aliasName: '邮箱'
            },
            pwd: {
                required: true,
                length: {min: 6, max: 20},
                aliasName: '密码'
            },
            re_pwd: {
                required: true,
                equals: 'pwd',
                aliasName: '再次输入密码'
            }
        }
    }
};
