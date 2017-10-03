module.exports = class extends think.Service {
    constructor(props) {
        super(props);
        this.Post = this.model('post');
    }

    /**
     * 新增文章
     * @param title
     * @param content
     * @param category_id
     * @param creator_id
     * @param tags
     * @param description
     * @returns {*|Promise}
     */
    addPost(title, content, category_id, creator_id, tags, description) {
        let post = {
            title: title,
            content: content,
            category_id: category_id,
            creator_id: creator_id,
            tags: JSON.stringify(tags),
            description: description
        }
        return this.Post.addPost(post);
    }

    /**
     * 获取文章列表根据热度排序
     * @param  {[type]} page [description]
     * @return {[type]}      [description]
     */
    getPostsByHot(page) {
        return this.Post.getPostsByHot(page);
    }

    /**
     * 获取文章详情
     * @param id
     * @returns {*}
     */
    getPostById(id) {
        return this.Post.getPostById(id);
    }

    /**
     * 文章热度+1
     * @param id
     * @returns {*|Promise}
     */
    updateHot(id) {
        return this.Post.updateHot(id);
    }
};
