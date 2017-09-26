function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('./base.js');

module.exports = class extends Base {
    getAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            let id = _this.get('id');
            let categoryService = _this.service('category');
            if (id) {
                // 详情
                let category = yield categoryService.getCategoryBuId(id);
                return _this.success(category, '查询成功');
            } else {
                // 列表
                let categories = yield categoryService.getCategories(_this.get('page') || 1);
                return _this.success(categories, '查询成功!');
            }
        })();
    }

    postAction() {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            let user = _this2.ctx.user;
            if (user.type < 2) {
                return _this2.fail(_this2.config('unLoginErrno'), '没有权限');
            }
            let categoryService = _this2.service('category');
            let name = _this2.post('name');
            let image = _this2.post('image') || '';
            let description = _this2.post('description') || '';
            let creator_id = user.user_ID;
            let result = yield categoryService.addCategory(name, image, description, creator_id);
            if (result.type === 'add') {
                return _this2.success({ id: result.id }, '添加成功!');
                // 新增成功
            } else if (result.type === 'exist') {
                // 已存在
                return _this2.fail(_this2.config('defaultErrno'), '该分类已存在!');
            }
        })();
    }
};