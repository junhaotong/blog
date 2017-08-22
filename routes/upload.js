/**
 * Created by tjh on 2017/8/21.
 */
let express = require('express');
let router = express.Router();
let upload = require('../config/upload');
let images = require('images');


router.post('/upload/image',upload.single('image'), (req, res, next) =>{
    if (req.file) {
        if (req.file.size > 1024 * 500) {
            images(req.file.path)
                .size(500)
                .save(req.file.path);
        }
        res.json({code: '10000', msg: '上传成功', avatar: req.file.path});
    } else {
        res.json({code: '20000', msg: '上传出错'});
    }
})

module.exports = router;