const Base = require('./base.js');

module.exports = class extends Base {
    async getAction() {
        let id = this.get('id');
        let categoryService = this.service('category');
        if (id) {
            // 详情
            let category = await categoryService.getCategoryBuId(id);
            return this.success(category, '查询成功');
        } else {
            // 列表
            let categories = await categoryService.getCategories(this.get('page') || 1);
            return this.success(categories, '查询成功!');
        }
    }

    async postAction() {
        let user = this.ctx.user;
        if (user.type < 2) {
            return this.fail(this.config('unLoginErrno'), '没有权限');
        }
        let categoryService = this.service('category');
        let name = this.post('name');
        let image = this.post('image') || '';
        let description = this.post('description') || '';
        let creator_id = user.user_ID;
        let result = await categoryService.addCategory(name, image, description, creator_id);
        if (result.type === 'add') {
            return this.success({id: result.id}, '添加成功!');
            // 新增成功
        } else if (result.type === 'exist') {
            // 已存在
            return this.fail(this.config('defaultErrno'), '该分类已存在!');
        }
    }
};
