const Base = require('../base.js');

module.exports = class extends Base {
    indexAction() {
        let userService = this.service('user');
        let user_id = userService.addUser(this.post('username'), this.post('email'), think.md5(this.post('password')), this.post('avatar'), 1, 0);
        if (user_id) {
            return this.success(null, '注册成功');
        } else {
            return this.fail(1000, '注册失败');
        }
    }
};
