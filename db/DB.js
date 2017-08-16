/**
 * Created by apple on 2017/8/12.
 */
let mysq = require('mysql');
let dbConfig = require('../config/DBConfig');

let pool = mysq.createPool(dbConfig.mysql);

module.exports = pool;
