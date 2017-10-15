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
     * 更新文章
     * @param id
     * @param title
     * @param content
     * @param category_id
     * @param creator_id
     * @param tags
     * @param description
     * @returns {*}
     */
    updatePost(id, title, content, category_id, creator_id, tags, description) {
    let post = {
        title: title,
        content: content,
        category_id: category_id,
        creator_id: creator_id,
        tags: JSON.stringify(tags),
        description: description
    }
    return this.Post.updatePost(id, post);
}

    /**
     * 获取文章列表根据热度排序
     * @param page
     * @param search
     * @returns {*|promise|type[]}
     */
    getPostsByHot(page, search = '') {
        return this.Post.getPostsByHot(page, search);
    }

    /**
     * 通过文章分类ID获取文章列表热度排序
     * @param page
     * @param categoryId
     * @returns {*|promise}
     */
    getPostsByCategoryId(page, categoryId) {
        return this.Post.getPostsByCategoryId(page, categoryId);

    }

    /**
     * 通过作者ID获取文章列表热度排序
     * @param page
     * @param creatorId
     * @returns {*|promise}
     */
    getPostsByAuthorId(page, creatorId) {
        return this.Post.getPostsByAuthorId(page, creatorId);
    }

    getPostsByTime(page) {
        return this.Post.getPostsByTime(page);
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

    /**
     * 删除文章
     * @param id
     */
    deletePost(id) {
        return this.Post.deletePost(id);
    }

    /**
     * 获取所有文章列表,包括已删除文章
     * @param page
     * @returns {promise}
     */
    getPostsByAdmin(page) {
        return this.Post.getAllPosts(page);
    }

    async changeStatus(id) {
        let user = await this.Post.getPostById(id);
        let newStatus;
        if (user.status === 0) {
            newStatus = -1;
        } else {
            newStatus = 0;
        }
        let line = await this.Post.updateStatus(id, newStatus);
        if (line) {
            return newStatus;
        } else {
            throw new Error('更新失败');
        }
    }
};
