module.exports = class extends think.Service {
    constructor(props) {
        super(props);
        this.Category = this.model('category');
    }

    /**
     * 新增文章分类
     * @param name
     * @param image
     * @param description
     * @param creator_id
     * @returns {*|Promise}
     */
    addCategory(name, image, description, creator_id) {
        let category = {
            name: name,
            image: image,
            description: description,
            creator_id: creator_id,
            create_at: Date.now()
        }
        let id = this.Category.addCategory(category);
        return id;
    }

    /**
     * 获取所有文章分类
     * @param page
     * @returns {*}
     */
    getCategories(page) {
        if (page > 0) page -= 1;
        return this.Category.getCategories(page);
    }

    /**
     * 通过categoryId获取分类
     * @param id
     * @returns {*}
     */
    getCategoryBuId(id) {
        return this.Category.getCategoryBuId(id);
    }
};
