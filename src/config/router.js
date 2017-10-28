module.exports = [
    ['/webhook', 'webhook', 'post'],
    [/^\/admin$/, 'index/admin', 'get', {validator: true}],
    [/^\/api\/admin\/login$/, 'admin/login', 'post'],
    [/^\/api\/admin\/user(?:\/(\d+))?$/, 'admin/user?id=:1', 'rest', {validator: true}],
    [/^\/api\/admin\/change_status$/, 'admin/user/changeStatus', 'post', {validator: true}],
    [/^\/api\/admin\/post\/change_status$/, 'post/changeStatus', 'post', {validator: true}],
    [/^\/api\/captchas\/new$/, 'front/captchas/new', 'get'],
    [/^\/api\/login$/, 'front/login', 'post'],
    ['/api/regist', 'front/regist', 'post'],
    ['/api/upload/image', 'upload/image', 'post'],
    [/^\/api\/category(?:\/(\d+))?$/, 'category?id=:1', 'rest'],
    [/^\/api\/post(?:\/(\d+))?$/, 'post?id=:1', 'rest'],
    [/^\/api\/send_code$/, 'mail/sendCode', 'post'],
    [/^\/api\/userinfo$/, 'front/user/userinfo', 'post', {validator: true}],
    [/^\/api\/save_info$/, 'front/user/saveInfo', 'post', {validator: true}],
    [/^\/api\/change_password/, 'front/user/changePassword', 'post', {validator: true}]
];
