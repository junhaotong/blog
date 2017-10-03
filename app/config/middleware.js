const path = require('path');
const isDev = true;
const qs = require('think-qs');

module.exports = [{
    handle: 'meta',
    options: {
        logRequest: isDev,
        sendResponseTime: isDev
    }
}, {
    handle: 'resource',
    enable: isDev,
    options: {
        root: path.join(think.ROOT_PATH, 'www'),
        publicPath: /^\/(static|front|uploads|favicon.ico|robots.txt)/,
        gzip: true
    }
}, {
    handle: 'trace',
    // enable: !think.isCli,
    options: {
        error(err, ctx) {
            return console.error(err);
        }
    }
}, {
    handle: 'payload',
    options: {}
}, {
    handle: qs,
    options: {}
}, {
    handle: 'router',
    options: {}
}, {
    handle: 'getUser'
}, {
    handle: 'validateAdmin',
    match: ctx => {
        let validator = false;
        think.app.routers.forEach(route => {
            if (route.match.test(ctx.path)) {
                validator = route.options.validator;
            }
        });
        if (validator) return true;else return false;
    }
}, 'logic', 'controller'];