/**
 * Created by apple on 2017/8/9.
 */
var express = require('express');
var router = express.Router();
var exec = require('exec');

router.all('/', function(req, res) {
    var commands = [
        'git pull',
        'npm install'
    ].join(' && ');

    exec(commands, function(err, out, code) {
        if (err instanceof Error) {
            res.end('Server Internal Error.');
            throw err;
        }
        res.end('Deploy Done.');
    });
});

module.exports = router;
