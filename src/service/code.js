const moment = require('moment');
module.exports = class extends think.Service {
    constructor(props) {
        super(props);
        this.Code = this.model('code');
    }

    /**
     * 用于查询验证码是否有效
     * @param code
     * @returns {*}
     */
    CodeIsValid(code) {
        let oldCode = this.Code.getCodeByCode(code);
        if (oldCode.length) {
            let valid = moment(oldCode.end_time).isBefore(Date.now());
            return valid;
        } else {
            return true;
        }
    }

    /**
     * 保存验证码到数据表
     * @param code
     * @param email
     * @returns {*|Promise}
     */
    saveCode(code, email) {
        let data = {
            code,
            email,
            create_time: moment().format('YYYY-MM-DD HH:mm:ss'),
            end_time: moment().add(15, 'm').format('YYYY-MM-DD HH:mm:ss')
        }
        return this.Code.saveCode(data);
    }

    /**
     * 获取验证码ByEmail
     * @param email
     * @returns {*}
     */
    getCodeByEmail(email) {
        let code = this.Code.getCodeByEmail(email);
        let valid = moment(Date.now()).isBefore(code.end_time);
        if (valid) {
            return code;
        } else {
            return {}
        }
    }
};
