module.exports = class extends think.Logic {
    indexAction() {

    }

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
};
