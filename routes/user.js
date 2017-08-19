/**
 * Created by apple on 2017/8/13.
 */
let express = require('express');
let router = express.Router();
let User = require('../lib/controlers/User');

/**
 * 注册
 */
// router.post('/regist', (req, res) => {
    // let email = '2535078865@qq.com',
    //     username = 'admin',
    //     password = '123456',
    //     avatar = 'https://avatars2.githubusercontent.com/u/20011131',
    //     user_type = 2,
    //     status = 0;
    // let md5 = crypto.createHash('md5');
    // md5.update(password);
    // password = md5.digest('hex');
    // let newUser = new User(email, username, password, avatar, moment(new Date()).format('YYYY-MM-DD hh:mm:ss'), user_type, status);
    // // res.send(newUser);
    // newUser.checkEmail()
    //     .then(results => {
    //         if (results.length > 0) {
    //             res.json({code: '20000', msg: '该邮箱已注册'});
    //         } else {
    //             newUser.regist()
    //                 .then(data => {
    //                     res.json({code: '10000', msg: '注册成功'});
    //                 })
    //                 .catch(err => {
    //                     res.json({code: '20000', msg: err});
    //                 })
    //         }
    //     })
    //     .catch(err => {
    //         res.json({code: '20000', msg: err});
    //     });
// });

/**
 * 登录
 */
router.post('/login', User.checkUsernameAndPwd);
router.post('/login', User.login);
router.post('/login', User.getToken);

module.exports = router;