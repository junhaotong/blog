/**
 * Created by apple on 2017/8/13.
 */
let pool = require('../../db/DB');
let SqlString = require('sqlstring');

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
                let sql = SqlString.format('SELECT username FROM USER WHERE email = ?', [this.email]);
                connection.query(sql, (err, results) => {
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
                let sql = SqlString.format('INSERT INTO user (email, username, password, avatar, create_at, user_type, status) VALUES (?, ?, ?, ?, ?, ?, ?', [this.email, this.username, this.password, this.avatar, this.create_at, this.user_type, this.status])
                connection.query(sql, (err, results) => {
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
                let sql = SqlString.format('SELECT email, username, password FROM user WHERE email = ?', [email]);
                connection.query(sql, (err, results) => {
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
     * @param user_type
     */
    getUserByUsername(username, user_type) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                }
                let sql;
                if (user_type > 1) {
                    sql = SqlString.format('SELECT user_ID, email, username, password FROM user WHERE username =? AND user_type > 1', [username]);
                } else {
                    sql = SqlString.format('SELECT user_ID, email, username, password FROM user WHERE username =?', [username]);
                }
                connection.query(sql, (err, results) => {
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
                let sql = SqlString.format('INSERT INTO token (token, user_ID) VALUES (?, ?) on duplicate key update token=?', [token, user_ID, token])
                connection.query(sql, (err, results) => {
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