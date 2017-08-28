const Base = require('./base.js');
const crypto = require('crypto');
const images= require('images');

module.exports = class extends Base {
    imageAction() {
        let path = this.ctx.file('image').path;
        let md5 = crypto.createHash('md5');
        // 使用图片名称加时间戳重命名图片
        let fileName = this.config('uploadURL');
        md5.update(this.ctx.file('image').name + Date.now());
        fileName += md5.digest('hex');
        // 个图图片添加后缀
        fileName += '.' + this.ctx.file('image').type.split('/')[1];
        let result = images(path).size(500)
            .save('www/' + fileName);
        return this.success({avatar: fileName}, '上传成功');
    }
};
