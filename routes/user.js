/**
 * Created by apple on 2017/8/13.
 */
let express = require('express');
let router = express.Router();
let User = require('../lib/controlers/User');
let crypto = require('crypto');
let moment = require('moment');

/**
 * 注册
 */
router.post('/regist', (req, res) => {
    let email = '2535078865@qq.com',
        username = 'admin',
        password = '123456',
        avatar = 'https://avatars2.githubusercontent.com/u/20011131',
        user_type = 2,
        status = 0;
    let md5 = crypto.createHash('md5');
    md5.update(password);
    password = md5.digest('hex');
    let newUser = new User(email, username, password, avatar, moment(new Date()).format('YYYY-MM-DD hh:mm:ss'), user_type, status);
    // res.send(newUser);
    newUser.checkEmail()
        .then(results => {
            if (results.length > 0) {
                res.json({code: '20000', msg: '该邮箱已注册'});
            } else {
                newUser.regist()
                    .then(data => {
                        res.json({code: '10000', msg: '注册成功'});
                    })
                    .catch(err => {
                        res.json({code: '20000', msg: err});
                    })
            }
        })
        .catch(err => {
            res.json({code: '20000', msg: err});
        });
});

/**
 * 登录
 */
router.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    let user = new User();
    user.getUserByUsername(username)
        .then(resules => {
            if (resules.length) {
                let data = JSON.parse(JSON.stringify(resules))[0];
                let user_pwd = data.password;
                let md5 = crypto.createHash('md5');
                md5.update(password);
                password = md5.digest('hex');
                if (password === user_pwd) {
                    res.json({code: '10000', msg: '登录成功'});
                } else {
                    res.json({code: '20001', msg: '密码错误'});
                }
            } else {
                res.json({code: '20000', msg: '用户不存在'});
            }
        })

    // user.getUserByEmail('2535078865@qq.com')
    //     .then(data => {
    //         res.json({code: '10000', data: data, msg: '查询成功'});
    //     })
    //     .catch(err => {
    //         res.json({code: '20000', msg: err});
    //     })
});

module.exports = router;