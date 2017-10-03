// default config
module.exports = {
    port: 8090,
    workers: 1,
    uploadURL: '/uploads/',
    errnoField: 'code', // errno field
    errmsgField: 'msg', // errmsg field
    defaultErrno: 1000, // default errno
    validateDefaultErrno: 2001, // validate default errno
    unLoginErrno: 3000, // 未登录错误码
    geetest_id: '808636df6a319439462e73dc6d06eeed',
    geetest_key: 'a322d17e12d1f4b4a20b00bd40aba53a',
    pagesize: 10 // 数据库查询默认页数
};
