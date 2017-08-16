var express = require('express');
var router = express.Router();
// let jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/admin', function (req, res, next) {
    res.render('admin.html');
    // pool.getConnection((err, connection) => {
    //     let token = jwt.sign({name: '俊豪'}, 'jeremy');
    //     res.cookie('_token', ''+token, { expires: new Date(Date.now() + 900000) });
    //     connection.query('show tables', (err, result) => {
    //         res.send(token);
    //         res.render('admin.html');
    //         connection.release();
    //     });
    // });
});

module.exports = router;
