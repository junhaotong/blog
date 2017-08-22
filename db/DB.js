/**
 * Created by apple on 2017/8/12.
 */
let mysq = require('mysql');
let config = require('../config/config');

let pool = mysq.createPool(config.mysql);

module.exports = pool;
