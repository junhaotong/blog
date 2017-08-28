const Base = require('./base.js');
const multer = require('multer');
const crypto = require('crypto');

module.exports = class extends Base {
    imageAction() {
        let storage = multer.diskStorage({
            destination: 'upload/',
            filename: function (req, file, callback) {
                var fileFormat = file.originalname.split(".");
                let random = Math.round(Math.random() * 1000);
                let time = Date.now() + random;
                let md5 = crypto.createHash('md5');
                md5.update(time.toString());
                let fileName = md5.digest('hex');
                callback(null, fileName + "." + fileFormat[fileFormat.length - 1]);
            }
        });

        let upload = multer({ storage: storage }).single('image');
        // console.log(this.ctx.req);
        // return this.success('上传成功')

        upload(this.ctx.request, this.ctx.response, err => {
            if (err) {
                return this.fail('2000', '上传失败');
            }
            return this.success('上传成功');
        });
    }
};