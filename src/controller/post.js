const Base = require('./base.js');

module.exports = class extends Base {
    async postAction() {
        if (!this.ctx.user.user_ID) return this.fail(this.config('unLoginErrno'), '未登录');
        let postService = this.service('post');
        let id = await postService.addPost(this.post('title'), this.post('content'), this.post('category_id'),this.ctx.user.user_ID);
        if (id) {
            return this.success('发布成功!');
        } else {
            return this.fail(this.config('defaultErrno'), '发布失败!');
        }
    }
};
