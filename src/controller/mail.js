const Base = require('./base.js');
const nodemailer = require('nodemailer');

module.exports = class extends Base {
    indexAction() {
        return this.display();
    }

    sendCodeAction() {
        let to = this.post('email');
        if (!to) return this.fail(1000, '邮箱不能为空!');
        
        var transporter = nodemailer.createTransport({
            service: '163',
            auth: {
                user: '15869294164@163.com',
                pass: 'tjh19971121'
            }
        });

        var mailOptions = {
            from: '15869294164@163.com',
            to: to,
            subject: 'Hello ✔',
            text: 'Hello world ✔',
            html: '<b>Hello 张通!</b>'
        };

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
            }else{
                console.log('Message sent: ' + info.response);
            }
        });
    }
};
