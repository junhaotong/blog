module.exports = class extends think.Logic {
    indexAction() {

    }

    /**
     * 修改用户信息
     */
    saveInfoAction() {
        this.rules = {
            avatar: {
                required: true,
                aliasName: '用户头像'
            },
            username: {
                string: true,
                required: true,
                trim: true,
                aliasName: '用户名'
            }
        }
    }

    /**
     * 修改密码
     */
    changePasswordAction() {
        this.rules = {
            old_password: {
                required: true,
                aliasName: '旧密码',
                length: {
                    min: 6,
                    max: 20
                }
            },
            new_password: {
                required: true,
                aliasName: '新密码',
                length: {
                    min: 6,
                    max: 20
                }
            },
            re_new_password: {
                required: true,
                aliasName: '重新输入新密码',
                equals: 'new_password',
                length: {
                    min: 6,
                    max: 20
                }
            }
        }
    }
};
