const Base = require('./base.js');
const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs');
const multiparty = require('multiparty');

module.exports = class extends Base {
    imageAction() {
        // console.log(this.ctx.file('image').path);
        // let file = fs.realpathSync(this.ctx.file('image').path);
        // let md5 = crypto.createHash('md5');
        // let imageName = this.ctx.file('image').name + Date.
        // fs.writeFile('')
        // console.log(this.config('uploadURL'));
        // let form = multiparty.Form({
        //     autoFiles: true,
        //     uploadDir: this.config('uploadURL')
        // });
        // console.log('wocao?');
        // form.parse(this.ctx.request, (err) => {
        //     return this.success('test');
        // });

        var upload = multer({ dest: 'upload/' }).single('image');
        upload(this.ctx.req, this.ctx.res, (err) => {
            if (err) {
                return this.fail(2000, err);
            } else {
                return this.success('上传成功');
            }
        })
    }
};
