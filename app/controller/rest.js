function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const path = require('path');
const assert = require('assert');

module.exports = class extends think.Controller {
  constructor(ctx) {
    super(ctx);
    this.resource = this.getResource();
    this.id = this.getId();
    assert(think.isFunction(this.model), 'this.model must be a function');
    this.modelInstance = this.model(this.resource);
  }
  __before() {}
  /**
   * get resource
   * @return {String} [resource name]
   */
  getResource() {
    const filename = this.__filename || __filename;
    const last = filename.lastIndexOf(path.sep);
    return filename.substr(last + 1, filename.length - last - 4);
  }
  getId() {
    const id = this.get('id');
    if (id && (think.isString(id) || think.isNumber(id))) {
      return id;
    }
    const last = this.ctx.path.split('/').slice(-1)[0];
    if (last !== this.resource) {
      return last;
    }
    return '';
  }
  getAction() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let data;
      if (_this.id) {
        const pk = yield _this.modelInstance.getPk();
        data = yield _this.modelInstance.where({ [pk]: _this.id }).find();
        return _this.success(data);
      }
      data = yield _this.modelInstance.select();
      return _this.success(data);
    })();
  }
  /**
   * put resource
   * @return {Promise} []
   */
  postAction() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      const pk = yield _this2.modelInstance.getPk();
      const data = _this2.post();
      delete data[pk];
      if (think.isEmpty(data)) {
        return _this2.fail('data is empty');
      }
      const insertId = yield _this2.modelInstance.add(data);
      return _this2.success({ id: insertId });
    })();
  }
  /**
   * delete resource
   * @return {Promise} []
   */
  deleteAction() {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      if (!_this3.id) {
        return _this3.fail('params error');
      }
      const pk = yield _this3.modelInstance.getPk();
      const rows = yield _this3.modelInstance.where({ [pk]: _this3.id }).delete();
      return _this3.success({ affectedRows: rows });
    })();
  }
  /**
   * update resource
   * @return {Promise} []
   */
  putAction() {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      if (!_this4.id) {
        return _this4.fail('params error');
      }
      const pk = yield _this4.modelInstance.getPk();
      const data = _this4.post();
      delete data[pk];
      if (think.isEmpty(data)) {
        return _this4.fail('data is empty');
      }
      const rows = yield _this4.modelInstance.where({ [pk]: _this4.id }).update(data);
      return _this4.success({ affectedRows: rows });
    })();
  }
  __call() {}
};