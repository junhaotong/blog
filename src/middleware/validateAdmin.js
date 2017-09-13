module.exports = (options, app) => {
    return async (ctx, next) => {
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
