/**
 * Created by apple on 2017/8/13.
 */
let express = require('express');
let router = express.Router();
let User = require('../lib/Controlers/User')

/**
 * 登录
 */
router.post('/login', User.checkUsernameAndPwd);
router.post('/login', User.checkUser);
router.post('/login', User.getToken);
router.post('/login', User.saveToken);
router.post('/login', User.login);

// 管理员后台注册
router.post('/admin/regist', User.checkAdmin);
router.post('/admin/regist', User.checkUserName);
router.post('/admin/regist', User.checkEmail);
router.post('/admin/regist', User.regist)

module.exports = router;