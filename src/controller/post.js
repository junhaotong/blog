const Base = require('./base.js');
const striptags = require('striptags');
const moment = require('moment');
moment.locale('zh-cn');

module.exports = class extends Base {
    async getAction() {
        let id = this.get('id');
        let postService = this.service('post');

        if (id) {
            await postService.updateHot(this.get('id'));
            let post = await postService.getPostById(this.get('id'));
            post.tags = JSON.parse(post.tags);
            post.time = moment(post.update_time || post.create_time).fromNow();
            return this.success(post, '查询成功!');
        } else {
            let posts;
            if (this.get('category_id')) {
                posts = await postService.getPostsByCategoryId(this.get('page') || 1, this.get('category_id'));
            } else if(this.get('creator_id')) {
                posts = await postService.getPostsByAuthorId(this.get('page') || 1, this.get('creator_id'));
            } else {
                posts = await postService.getPostsByHot(this.get('page') || 1, this.get('search'));
            }
            posts.data.forEach(post => {
                post.tags = JSON.parse(post.tags);
                post.time = moment(post.update_time || post.create_time).fromNow();
            })
            return this.success(posts, '获取成功!');
        }
    }

    async postAction() {
        if (!this.ctx.user.user_ID) return this.fail(this.config('unLoginErrno'), '未登录');

        if (this.post('tags').length > 5) return this.fail(this.config('defaultErrno'), '最多添加5个标签');
        let postService = this.service('post');

        let title = striptags(this.post('title'));
        let description = striptags(this.post('content'));
        description = description.substr(0, 300);
        let id = await postService.addPost(title, this.post('content'), this.post('category_id'),this.ctx.user.user_ID, this.post('tags'), description);
        if (id) {
            return this.success({id: id}, '发布成功!');
        } else {
            return this.fail(this.config('defaultErrno'), '发布失败!');
        }
    }
};
