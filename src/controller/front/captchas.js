const Base = require('../base.js');
const Geetest = require('gt3-sdk');

think.captcha = new Geetest({
    geetest_id: think.config('geetest_id'),
    geetest_key: think.config('geetest_key')
});

module.exports = class extends Base {
    /**
     * 注册新的captcha
     * @returns {Promise.<T>|*}
     */
    newAction() {
        return think.captcha.register(null)
            .then(data => {
                if (!data.success) {
                    // 进入 fallback，如果一直进入此模式，请检查服务器到极验服务器是否可访问
                    // 可以通过修改 hosts 把极验服务器 api.geetest.com 指到不可访问的地址
                    // 为以防万一，你可以选择以下两种方式之一：
                    // 1. 继续使用极验提供的failback备用方案
                    this.session('fallback', true);
                    return this.success(data);
                    // 2. 使用自己提供的备用方案
                } else {
                    // 正常模式
                    this.session('fallback', false);
                    return this.success(data);
                }
            }, err => {
                return this.fail(err);
            })
            .catch(err => {
                return this.fail(err);
            })
    }

    async validateCaptchas() {
        let fallback = await this.session('fallback');
        return think.captcha.validate(fallback, {
            geetest_challenge: this.post('geetest_challenge'),
            geetest_validate: this.post('geetest_validate'),
            geetest_seccode: this.post('geetest_seccode')
        }).then(success => {
            return success;
        }, err => {
            return false;
        })
    }
};
