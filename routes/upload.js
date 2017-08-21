/**
 * Created by tjh on 2017/8/21.
 */
let express = require('express');
let router = express.Router();
let upload = require('../config/upload');
let gm = require('gm');

router.post('/upload/image',upload.single('image'), (req, res, next) =>{
    if (req.file) {
        // gm(req.file.path).resize(100, 100).write(req.file.path, function (err) {
        //     if (err) {
        //         console.log(err);
        //
        //         res.json({err: err});
        //     }
            res.json({code: '10000', msg: '上传成功', avatar: req.file.path});
        // });
    } else {
        res.json({code: '20000', msg: '上传出错'});
    }
})

module.exports = router;