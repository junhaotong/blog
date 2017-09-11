module.exports = class extends think.Service {
    saveToken(token, user_ID) {
        let tokenModel = this.model('token');
        return tokenModel.saveToken(token, user_ID).then(result => {
            return true;
        }, err => {
            return false;
        }).catch(err => {
            return false;
        });
    }
};
//# sourceMappingURL=token.js.map