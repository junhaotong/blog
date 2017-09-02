const path = require('path');
const isDev = true;

module.exports = [
    {
        handle: 'meta',
        options: {
            logRequest: isDev,
            sendResponseTime: isDev
        }
    },
    {
        handle: 'resource',
        enable: isDev,
        options: {
            root: path.join(think.ROOT_PATH, 'www'),
            publicPath: /^\/(static|uploads|favicon\.ico)/,
            gzip: true
        }
    },
    {
        handle: 'trace',
        enable: !think.isCli,
        options: {
            debug: isDev
        }
    },
    {
        handle: 'payload',
        options: {}
    },
    {
        handle: 'router',
        options: {}
    },
    {
        handle: 'validationtoken',
        match: ctx => {
            let validator = false;
            think.app.routers.forEach(route => {
                if (route.match.test(ctx.path)) {
                    validator = route.options.validator;
                }
            })
            if (validator) return true;
            else return false;
        }
    },
    'logic',
    'controller'
];
