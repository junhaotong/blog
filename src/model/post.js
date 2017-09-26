module.exports = class extends think.Model {
    /**
     * 新增文章
     * @param post
     * @returns {Promise}
     */
    addPost(post) {
        return this.add(post);
    }

    /**
     * 更新文章
     * @param id
     * @param newPost
     */
    updatePost(id, newPost) {
        return this.where({id: id}).update(newPost);
    }
};
