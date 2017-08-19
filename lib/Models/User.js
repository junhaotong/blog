/**
 * Created by apple on 2017/8/13.
 */
let pool = require('../../db/DB');

class User {
    constructor(email, username, password, avatar, create_at, user_type, status) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.avatar = avatar;
        this.create_at = create_at;
        this.user_type = user_type;
        this.status = status;
    }

    /**
     * 验证邮箱是否被注册
     * @returns {Promise}
     */
    checkEmail() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                }
                connection.query(`SELECT username FROM USER WHERE email = '${this.email}'`, (err, results) => {
                    connection.release();
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                });
            });
        });
    }

    /**
     * 注册用户
     */
    regist() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                }
                connection.query(`INSERT INTO user (email, username, password, avatar, create_at, user_type, status) VALUES ('${this.email}', '${this.username}', '${this.password}', '${this.avatar}', '${this.create_at}', ${this.user_type}, ${this.status})`, (err, results) => {
                    connection.release();
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                });
            })
        });
    }

    /**
     * 通过邮箱获取用户
     * @param email
     * @returns {Promise}
     */
    getUserByEmail(email) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                }
                connection.query(`SELECT email, username, password FROM user WHERE email = '${email}'`, (err, results) => {
                    connection.release();
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                });
            });
        });
    }

    /**
     * 通过用户名获取用户
     * @param username
     */
    getUserByUsername(username) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                }
                connection.query(`SELECT user_ID, email, username, password FROM user WHERE username = '${username}'`, (err, results) => {
                    connection.release();
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                });
            });
        });
    }

    /**
     * 保存token到数据库
     * @param token
     * @param user_ID 用户ID
     * @returns {Promise}
     */
    saveToken(token, user_ID) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                }
                connection.query(`INSERT INTO token (token, user_ID) VALUES ('${token}', ${user_ID}) on duplicate key update token='${token}'`, (err, results) => {
                    connection.release();
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                });
            });
        });
    }
}

module.exports = User;