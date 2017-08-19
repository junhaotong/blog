/**
 * Created by apple on 2017/8/13.
 */
let User = require('../Models/User');
let crypto = require('crypto');
let moment = require('moment');
let jwt = require('jsonwebtoken');

exports.checkUsernameAndPwd = (req, res, next) => {
    if (!req.body.username) {
        res.json({code: '20000', msg: '用户名不能为空'});
    } else if (!req.body.password) {
        res.json({code: '20001', msg: '密码不能为空'});
    } else {
        next();
    }
}

exports.login = (req, res, next) => {
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
                    req.body.email = data.email;
                    req.body.user_ID = data.user_ID;
                    next();
                } else {
                    res.json({code: '20001', msg: '密码错误'});
                }
            } else {
                res.json({code: '20000', msg: '用户不存在'});
            }
        });
}

exports.getToken = (req, res, next) => {
    let user = {
        username: req.body.username,
        email: req.body.email,
        user_ID: req.body.user_ID
    }
    user = JSON.stringify(user);
    let md5 = crypto.createHash('md5');
    md5.update(user);
    user = md5.digest('hex');
    let token = jwt.sign({ data: user}, 'Jeremy');
    res.json({data: token});
}
