// default config
module.exports = {
    port: 8090,
    workers: 1,
    uploadURL: 'uploads/',
    errnoField: 'code', // errno field
    errmsgField: 'msg', // errmsg field
    defaultErrno: 1000, // default errno
    validateDefaultErrno: 2001 // validate default errno
};