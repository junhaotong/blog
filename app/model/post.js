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
        return this.where({ id: id }).update(newPost);
    }

    /**
     * 获取所有文章热度排序
     * @param  {[type]} page [description]
     * @return {[type]}      [description]
     */
    getPostsByHot(page) {
        return this.alias('p').page(page, think.config('pagesize')).order('hot DESC').join({
            table: 'user',
            join: 'left',
            as: 'u',
            on: ['creator_id', 'id']
        }).field('p.id, p.title, p.tags, p.description, p.hot, p.create_time, p.update_time, u.username AS author').countSelect();
    }

    /**
     * 获取文章详情ById
     * @param id
     */
    getPostById(id) {
        return this.alias('p').where({ 'p.id': id }).join({
            table: 'user',
            join: 'left',
            as: 'u',
            on: ['creator_id', 'id']
        }).field('p.id, p.title, p.content, p.tags, p.hot, p.create_time, p.update_time, u.username AS author').find();
    }

    /**
     * 文章热度+1
     * @param id
     * @returns {Promise}
     */
    updateHot(id) {
        return this.where({ id: id }).increment('hot', 1);
    }
};