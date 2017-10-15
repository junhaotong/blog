const cookie = require('cookie');

module.exports = (options, app) => {
    return async (ctx, next) => {
        if (ctx.isGet) {
            let reqCookie = cookie.parse(ctx.req.headers.cookie);
            if (reqCookie.userinfo) {
                let userinfo = JSON.parse(reqCookie.userinfo);
                let userService = ctx.service('user');
                let user = await userService.getUserByToken(userinfo.token);
                if (user.type > 1) {
                    return next();
                } else {
                    ctx.cookie('userinfo', null);
                    return ctx.redirect('/admin');
                }
            } else {
                return next();
            }
        }
        let token = ctx.headers.authorization;
        if (token === 'undefined' || !token && ctx.url.indexOf('/login') < 0 && ctx.url.indexOf('/regist') < 0) {
            return ctx.fail(3000, '未登录');
        }
        let user = ctx.user || {};
        if (!user.id) return ctx.fail(3000, '未登录')
        if (ctx.url.indexOf('/admin') >= 0 && user.type < 2) {
            // 无权限访问后台接口
            return ctx.fail(3000, '未登录')
        }
        return next();
    };
};
