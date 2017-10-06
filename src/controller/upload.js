const Base = require('./base.js');
const images = require('images');

module.exports = class extends Base {
    imageAction() {
        let path = this.ctx.file('image').path;
        // 使用图片名称加时间戳重命名图片
        let fileName = this.config('uploadURL');
        let thumbName = fileName += think.md5(this.ctx.file('image').name + Date.now());
        thumbName += '400x400';
        // 图片添加后缀
        thumbName += '.' + this.ctx.file('image').type.split('/')[1];
        fileName += '.' + this.ctx.file('image').type.split('/')[1];

        //原图
        images(path)
            .save('www' + fileName);
        // 压缩图
        // let result;
        let imgSize = images(path).size();

        if (imgSize.width > imgSize.height) {
            let imgW = imgSize.height;
            let imgH = imgSize.height;
            let startX = imgSize.width / 2 - imgSize.height / 2;
            let startY = imgSize.height;
            images(imgW, imgH)
                .draw(images(path, startX, startY, imgW, imgH), 0, 0)
                .size(400)
                .save('www' + thumbName)
        } else {
            let imgW = imgSize.width;
            let imgH = imgSize.width;
            let startX = imgSize.height / 2 - imgSize.width / 2;
            let startY = imgSize.width;
            images(imgW, imgH)
                .draw(images(path, startX, startY, imgW, imgH), 0, 0)
                .size(400)
                .save('www' + thumbName)
        }
        // console.log(result);
        if (think.isFile('www' + thumbName) && think.isFile('www' + fileName)) {
            return this.success({avatar: fileName, thumb_avatar: thumbName}, '上传成功');
        } else {
            return this.fail(2000, '上传失败');
        }
    }
};
