// think.captchas
const Geetest = require('gt3-sdk');

think.captcha = new Geetest({
    geetest_id: think.config('geetest_id'),
    geetest_key: think.config('geetest_key')
});


module.exports = class extends think.Logic {
    indexAction() {
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
                    // todo
                } else {
                    // 正常模式
                    this.session('fallback', false);
                    return this.success(data);
                }
            })
            .catch(err => {
                return this.fail(err);
            })
    }
};
