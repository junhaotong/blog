function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('./base.js');
const striptags = require('striptags');
const moment = require('moment');
moment.lang('zh-cn');

module.exports = class extends Base {
    getAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            let id = _this.get('id');
            let postService = _this.service('post');

            if (id) {
                yield postService.updateHot(_this.get('id'));
                let post = yield postService.getPostById(_this.get('id'));
                post.tags = JSON.parse(post.tags);
                post.time = moment(post.update_time || post.create_time).fromNow();
                return _this.success(post, '查询成功!');
            } else {
                let posts = yield postService.getPostsByHot(_this.get('page') || 1);
                posts.data.forEach(function (post) {
                    post.tags = JSON.parse(post.tags);
                    post.time = moment(post.update_time || post.create_time).fromNow();
                });
                return _this.success(posts, '获取成功!');
            }
        })();
    }

    postAction() {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            if (!_this2.ctx.user.user_ID) return _this2.fail(_this2.config('unLoginErrno'), '未登录');

            if (_this2.post('tags').length > 5) return _this2.fail(_this2.config('defaultErrno'), '最多添加5个标签');
            let postService = _this2.service('post');

            let description = striptags(_this2.post('content'));
            description = description.substr(0, 300);
            let id = yield postService.addPost(_this2.post('title'), _this2.post('content'), _this2.post('category_id'), _this2.ctx.user.user_ID, _this2.post('tags'), description);
            if (id) {
                return _this2.success({ id: id }, '发布成功!');
            } else {
                return _this2.fail(_this2.config('defaultErrno'), '发布失败!');
            }
        })();
    }
};