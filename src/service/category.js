import images from 'images';
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
     * 通过Id获取分类
     * @param id
     * @returns {*}
     */
    getCategoryById(id) {
        return this.Category.getCategoryById(id);
    }

    /**
     * 通过Id更新文章分类
     * 
     * @param {any} id 
     * @param {any} image 
     * @param {any} name 
     * @param {any} description 
     * @returns 
     */
    updateCategoryById(id, image, name, description) {
        let data = {
            image: image,
            name: name,
            description: description
        }
        return this.Category.updateCategoryById(id, data);
    }
};
