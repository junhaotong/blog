module.exports = [
    [/^\/admin/, 'index/admin', 'get'],
    ['/api/admin/login', 'admin/login', 'post'],
    ['/api/regist', 'front/regist', 'post'],
    ['/api/upload/image', 'upload/image', 'post'],
    ['/webhook', 'webhook', 'post']
];
