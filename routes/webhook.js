/**
 * Created by apple on 2017/8/9.
 */
var express = require('express');
var router = express.Router();
var exec = require('exec');

router.get('/', function(req, res) {
    var commands = [
        'git pull',
        'forever restart ./bin/www'
    ].join(' && ');

    exec(commands, function(err, out, code) {
        if (err instanceof Error) {
            res.writeHead(500);
            res.end('Server Internal Error.');
            throw err;
        }
        res.end('Deploy Done.');
    });
});

module.exports = router;
