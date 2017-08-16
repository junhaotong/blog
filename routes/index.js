var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index.html');
});
/* GET admin page. */
router.get('/admin', function (req, res, next) {
    res.render('admin.html');
});

module.exports = router;
