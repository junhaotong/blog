function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
        return think.captcha.register(null).then(data => {
            if (!data.success) {
                // 进入 fallback，如果一直进入此模式，请检查服务器到极验服务器是否可访问
                // 可以通过修改 hosts 把极验服务器 api.geetest.com 指到不可访问的地址
                // 为以防万一，你可以选择以下两种方式之一：
                // 1. 继续使用极验提供的failback备用方案
                this.session('fallback', true);
                return this.success(data);
                // 2. 使用自己提供的备用方案
                // todo
            } else {
                // 正常模式
                this.session('fallback', false);
                return this.success(data);
            }
        }, err => {
            return this.fail(err);
        }).catch(err => {
            return this.fail(err);
        });
    }

    validateCaptchas() {
        var _this = this;

        return _asyncToGenerator(function* () {
            let fallback = yield _this.session('fallback');
            return think.captcha.validate(fallback, {
                geetest_challenge: _this.post('geetest_challenge'),
                geetest_validate: _this.post('geetest_validate'),
                geetest_seccode: _this.post('geetest_seccode')
            }).then(function (success) {
                return success;
            }, function (err) {
                return false;
            });
        })();
    }
};
//# sourceMappingURL=captchas.js.map