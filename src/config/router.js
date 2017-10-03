module.exports = [
    ['/webhook', 'webhook', 'post'],
    [/^\/admin$/, 'index/admin', 'get'],
    [/^\/api\/admin\/login$/, 'admin/login', 'post'],
    [/^\/api\/captchas\/new$/, 'front/captchas/new', 'get'],
    [/^\/api\/login$/, 'front/login', 'post'],
    ['/api/regist', 'front/regist', 'post'],
    ['/api/upload/image', 'upload/image', 'post'],
    [/^\/api\/admin\/user(?:\/(\d+))?$/, 'admin/user?id=:1', 'rest', {validator: true}],
    [/^\/api\/category(?:\/(\d+))?$/, 'category', 'rest'],
    [/^\/api\/post(?:\/(\d+))?$/, 'post?id=:1', 'rest'],
];
