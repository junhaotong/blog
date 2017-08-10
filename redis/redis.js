/**
 * Created by apple on 2017/8/10.
 */
var redis = require('redis');
var client = redis.createClient({host: '106.15.199.118', pass: 'r-uf68511c25b3b964:Tjh19971121'});

module.exports = client