module.exports = class extends think.Service {
    saveToken(token, user_ID) {
        let tokenModel = this.model('token');
        return tokenModel.saveToken(token, user_ID)
    }
};
