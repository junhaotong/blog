const Base = require('./base.js');
const nodemailer = require('nodemailer');
let mail = require('../config/mailTemplate.js');
var transporter = nodemailer.createTransport(think.config('mail'));
const moment = require('moment');

module.exports = class extends Base {
    indexAction() {
        return this.display();
    }

    async sendCodeAction() {
        let to = this.post('email');

        if (!to) return this.fail(1000, '邮箱不能为空!');
        let code = await this.generateCode();

        let mailOptions = {
            from: think.config('mail').auth.user,
            to: to,
            subject: '邮箱测试',
            text: '邮箱测试',
            html: mail.template(to, code)
        };
        let smtp = new Promise(function (resolve, reject) {
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    reject(err);
                } else {
                    resolve(info);
                }
            });
        });

        return smtp.then(info => {
            let codeService = this.service('code');
            codeService.saveCode(code, to);
            return this.success({}, '验证码发送成功!');
        }, err => {
            return this.fail(1000, '系统繁忙,请稍后再试!');
        });
    }

    async generateCode() {
        let code = '';
        for (let i = 0; i < 4; i++) {
            code += (Math.round(Math.random() * 9)).toString();
        }
        let codeService = this.service('code');
        let CodeIsValid = await codeService.CodeIsValid(code);
        if (!CodeIsValid) {
            code = await this.generateCode();
        }
        return code;
    }
};
