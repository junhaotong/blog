const Base = require('../base.js');

module.exports = class extends Base {
    async indexAction() {
        let captchasController = this.controller('front/captchas');
        let success = await captchasController.validateCaptchas();
        if (success) {
            // 验证码二次验证通过
            return this.success('验证通过');
        } else {
            return this.fail(1000, '验证码错误或已失效');
        }
    }
};
