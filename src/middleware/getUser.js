module.exports = (options, app) => {
    return async (ctx, next) => {
        let token = ctx.headers.authorization;
        if (token !== 'undefined' && token) {
            let userService = ctx.service('user');
            let user = await userService.getUserByToken(token);
            ctx.user = user;
        }
        return next();
    };
};
