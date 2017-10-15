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

    /**
     * 获取所有文章热度排序
     * @param page
     * @param search
     * @returns {promise}
     */
    getPostsByHot(page, search) {
        return this
            .alias('p')
            .page(page, think.config('pagesize'))
            .order('hot DESC')
            .join({
                table: 'user',
                join: 'left',
                as: 'u',
                on: ['creator_id', 'id']
            })
            .field('p.id, p.title, p.tags, p.description, p.hot, p.create_time, p.status, p.creator_id, p.update_time, u.username AS author')
            .where(`title LIKE '%${search}%' OR content LIKE '%${search}%'`)
            .where({'p.status': 0})
            .countSelect();
    }

    /**
     * 获取所有文章时间排序
     * @param page
     * @returns {promise}
     */
    getPostsByTime(page) {
        return this
            .alias('p')
            .page(page, think.config('pagesize'))
            .order('update_time DESC')
            .join({
                table: 'user',
                join: 'left',
                as: 'u',
                on: ['creator_id', 'id']
            })
            .field('p.id, p.title, p.tags, p.description, p.hot, p.create_time, p.creator_id, p.update_time, u.username AS author')
            .where({'p.status': 0})
            .countSelect();
    }

    /**
     * 通过文章分类ID获取文章列表热度排序
     * @param page
     * @param categoryId
     * @returns {promise}
     */
    getPostsByCategoryId(page, categoryId) {
        return this
            .alias('p')
            .page(page, think.config('pagesize'))
            .order('hot DESC')
            .join({
                table: 'user',
                join: 'left',
                as: 'u',
                on: ['creator_id', 'id']
            })
            .field('p.id, p.title, p.tags, p.description, p.hot, p.creator_id, p.create_time, p.update_time, u.username AS author')
            .where({
                category_id: categoryId,
                'p.status': 0
            })
            .countSelect();
    }

    /**
     * 通过作者ID获取文章列表热度排序
     * @param page
     * @param creatorId
     * @returns {promise}
     */
    getPostsByAuthorId(page, creatorId) {
        return this
            .alias('p')
            .page(page, think.config('pagesize'))
            .order('hot DESC')
            .join({
                table: 'user',
                join: 'left',
                as: 'u',
                on: ['creator_id', 'id']
            })
            .field('p.id, p.title, p.tags, p.description, p.hot, p.create_time, p.creator_id, p.update_time, u.username AS author')
            .where({
                creator_id: creatorId,
                'p.status': 0
            })
            .countSelect();
    }

    /**
     * 获取文章详情ById
     * @param id
     */
    getPostById(id) {
        return this
            .alias('p')
            .where({
                'p.id': id,
                'p.status': 0
            })
            .join({
                table: 'user',
                join: 'left',
                as: 'u',
                on: ['creator_id', 'id']
            })
            .join({
                table: 'category',
                join: 'left',
                as: 'c',
                on: ['category_id', 'id']
            })
            .field('p.id, p.title, p.creator_id, p.content, p.tags, p.hot, p.create_time, p.creator_id, p.status, p.update_time, u.username AS author, c.id AS category_id, c.name AS category')
            .find();
    }

    /**
     * 文章热度+1
     * @param id
     * @returns {Promise}
     */
    updateHot(id) {
        return this.where({id: id}).increment('hot', 1);
    }

    /**
     * 删除文章
     * @param id
     */
    deletePost(id) {
        return this.where({id: id}).update({status: -1})
    }

    /**
     * 获取所有文章列表,包括已删除的文章
     * @param page
     * @returns {promise}
     */
    getAllPosts(page) {
        return this
            .alias('p')
            .page(page, think.config('pagesize'))
            .order('update_time DESC')
            .join({
                table: 'user',
                join: 'left',
                as: 'u',
                on: ['creator_id', 'id']
            })
            .field('p.id, p.title, p.tags, p.description, p.hot, p.create_time, p.creator_id, p.update_time, p.status, u.username AS author')
            .countSelect();
    }

    /**
     * 更新文章状态
     * @param id
     * @param new_status
     */
    updateStatus(id, new_status) {
        return this
            .where({
                id: id
            })
            .update({
                status: new_status
            })
    }
};
