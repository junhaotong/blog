/**
 * Created by tjh on 2017/8/21.
 */
let multer = require('multer');
let config = require('./config')
let crypto = require('crypto');

var storage = multer.diskStorage({
    //设置上传文件路径,以后可以扩展成上传至七牛,文件服务器等等
    //Note:如果你传递的是一个函数，你负责创建文件夹，如果你传递的是一个字符串，multer会自动创建
    destination: config.upload.path,
    // TODO:文件区分目录存放
    //获取文件MD5，重命名，添加后缀,文件重复会直接覆盖
    filename: function (req, file, callback) {
        var fileFormat = (file.originalname).split(".");
        let random = Math.round(Math.random() * 1000);
        let time = Date.now() + random;
        let md5 = crypto.createHash('md5');
        md5.update(time.toString());
        let fileName = md5.digest('hex');
        callback(null, fileName + "." + fileFormat[fileFormat.length - 1]);
    }
});

//添加配置文件到muler对象。
let upload = multer({
    storage: storage,
    //其他设置请参考multer的limits
    //limits:{}
});

//导出对象
module.exports = upload;
