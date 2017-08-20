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

exports.checkUser = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    let user_type = req.body.user_type;

    let user = new User();
    user.getUserByUsername(username, user_type)
        .then((resules) => {
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
    req.body.token = token;
    next();
}

exports.saveToken = (req, res, next) => {
    let token = req.body.token;
    let user_ID = req.body.user_ID;
  let user = new User();
  user.saveToken(token, user_ID)
      .then(results => {
          req.body.token = token;
          next();
      })
      .catch(err => {
          res.json({code: '20000', msg: '登录失败', err: err});
      })
}

exports.login = (req, res, next) => {
    let username = req.body.username;
    let email = req.body.email;
    let userinfo = JSON.stringify({username: username, token: req.body.token});
    res.cookie('userinfo', userinfo, {maxAge: 86400000});
    res.json({code: '10000',msg: '登录成功',data: {username: username, email: email}});
}