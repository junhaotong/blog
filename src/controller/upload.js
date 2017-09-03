const Base = require('./base.js');
const images= require('images');

module.exports = class extends Base {
    imageAction() {
        let path = this.ctx.file('image').path;
        // 使用图片名称加时间戳重命名图片
        let fileName = this.config('uploadURL');
        fileName += think.md5(this.ctx.file('image').name + Date.now());
        // 个图图片添加后缀
        fileName += '.' + this.ctx.file('image').type.split('/')[1];
        let result = images(path).size(500)
            .save('www' + fileName);
        if (think.isFile('www' + fileName)) {
            return this.success({avatar: fileName}, '上传成功');
        } else {
            return this.fail(2000, '上传失败');
        }
    }
};
