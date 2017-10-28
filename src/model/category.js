module.exports = class extends think.Model {
    /**
     * 新增文章分类
     * @param catrgory
     * @returns {Promise}
     */
    addCategory(catrgory) {
        return this.thenAdd(catrgory, {name: catrgory.name});
    }

    /**
     * 查询所有文章分类
     * @param page
     */
    getCategories(page) {
        return this
            .alias('c')
            .join({
                table: 'user',
                join: 'left',
                as: 'u',
                on: ['creator_id', 'id'] //ON 条件
            })
            .page(page, 20)
            .field('c.id, c.name, c.image, c.create_time, u.username')
            .select();
    }

    /**
     * 通过categoryId获取一个分类
     * @param id
     */
    getCategoryById(id) {
        return this.where({id: id, status: 0}).find();
    }
    
    /**
     * 更新文章分类
     * @param {any} id 
     * @param {any} data 
     * @returns 
     */
    updateCategoryById(id, data) {
        return this.where({id: id}).update(data);
    }
};
