module.exports = class extends think.Model {
    saveToken(token, user_ID) {
        return this.thenUpdate({ token: token, user_ID: user_ID }, { user_ID: user_ID });
    }
};