function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('./base.js');

module.exports = class extends Base {
    postAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            if (!_this.ctx.user.user_ID) return _this.fail(_this.config('unLoginErrno'), '未登录');
            let postService = _this.service('post');
            let id = yield postService.addPost(_this.post('title'), _this.post('content'), _this.post('category_id'), _this.ctx.user.user_ID);
            if (id) {
                return _this.success('发布成功!');
            } else {
                return _this.fail(_this.config('defaultErrno'), '发布失败!');
            }
        })();
    }
};