function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = (options, app) => {
    return (() => {
        var _ref = _asyncToGenerator(function* (ctx, next) {
            let token = ctx.headers.authorization;
            if (token === 'undefined' || !token && ctx.url.indexOf('/login') < 0 && ctx.url.indexOf('/regist') < 0) {
                return ctx.fail(3000, '未登录');
            }
            let userService = ctx.service('user');
            let user = yield userService.getUserByToken(token);
            if (!user.id) return ctx.fail(3000, '未登录');
            if (ctx.url.indexOf('/admin') >= 0 && user.type < 2) {
                // 无权限访问后台接口
                return ctx.fail(3000, '未登录');
            }
            ctx.user = user;
            return next();
        });

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    })();
};