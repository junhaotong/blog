<template>
    <Row>
        <table class="basic">
            <tr class="password">
                <td>
                    旧密码
                </td>
                <td>
                    <Input
                            type="password"
                            style="width: 200px;"
                            @on-blur="validPwd('old_password')"
                            v-model="old_password"
                            placeholder="请输入旧密码"/>
                    <transition name="slide-fade">
                        <div class="hint" v-if="old_password_error">{{old_password_error}}</div>
                    </transition>
                </td>
            </tr>
            <tr class="password">
                <td>
                    新密码
                </td>
                <td>
                    <Input
                            type="password"
                            v-model="new_password"
                            @on-blur="validPwd('new_password')"
                            style="width: 200px;"
                            placeholder="请输入新密码"/>
                    <transition name="slide-fade">
                        <div class="hint" v-if="new_password_error">{{new_password_error}}</div>
                    </transition>
                </td>
            </tr>
            <tr class="password">
                <td>
                    重新输入新密码
                </td>
                <td>
                    <Input
                            type="password"
                            v-model="re_new_password"
                            @on-blur="validPwd('re_new_password')"
                            style="width: 200px;"
                            placeholder="请输入新密码"/>
                    <transition name="slide-fade">
                        <div class="hint" v-if="re_new_password_error">{{re_new_password_error}}</div>
                    </transition>
                </td>
            </tr>
            <tr>
                <td>
                    <Button type="primary" style="width: 120px;" @click="submit">确认修改</Button>
                </td>
            </tr>
        </table>
    </Row>
</template>

<script>
    export default {
        name: 'SettingAccount',
        data() {
            return {
                email: '',
                old_password: '',
                new_password: '',
                re_new_password: '',
                old_password_error: '',
                new_password_error: '',
                re_new_password_error: '',
                sendStatus: false,
                sendHint: '邮箱验证码'
            }
        },
        methods: {
            /**
             * 验证密码
             * @param key
             * @returns {boolean}
             */
            validPwd(key) {
                if (this[key] === '') {
                    if(key === 'old_password') {
                        this[`${key}_error`] = '请输入旧密码';
                    } else if (key === 'new_password') {
                        this[`${key}_error`] = '请输入新密码';
                    } else {
                        this[`${key}_error`] = '请重新输入新密码';
                    }
                    return false;
                } else {
                    let reg = /^[0-9A-Za-z]{6,20}$/;
                    if (reg.test(this[key])) {
                        this[`${key}_error`] = '';
                        if (key === 're_new_password') {
                            if (this[key] !== this.new_password) {
                                this[`${key}_error`] = '两次密码不一致';
                                return false;
                            }
                        }
                        return true;
                    } else {
                        this[`${key}_error`] = '6-20位字符或数字';
                        return false;
                    }
                }
            },
            getEmail() {
                this.axios.post('/userinfo')
                    .then(res => {
                        if (res.data.code === 0) {
                            this.email = res.data.data.email;
                        } else {
                            this.$Message.error('获取用户信息出错!')
                        }
                    });
            },
            sendCode() {
                this.axios.post('/send_code', {
                    email: this.email
                })
                    .then(res => {
                        if (res.data.code === 0) {
                            this.sendStatus = true;
                            this.sendHint = '60秒后重发';
                            let seconds = 59;
                            let interval = setInterval(() => {
                                this.sendHint = `${seconds}秒后重发`;
                                seconds--;
                                if (seconds === 0) {
                                    clearInterval(interval);
                                    this.sendHint = '重新发送';
                                    this.sendStatus = false;
                                }
                            }, 1000);
                        } else{
                            this.$Message.error(res.data.msg);
                        }
                    })
            },
            submit() {
                let old_pwd = this.validPwd('old_password');
                let new_pwd = this.validPwd('new_password');
                let re_new_pwd = this.validPwd('re_new_password');
                if (old_pwd && new_pwd && re_new_pwd) {
                    this.axios.post('/change_password', {
                        old_password: this.old_password,
                        new_password: this.new_password,
                        re_new_password: this.re_new_password
                    })
                        .then(res => {
                            if (res.data.code === 0) {
                                this.$Message.success('修改成功,请重新登录');
                                this.$store.dispatch('logout');
                                this.$router.push('/sign');
                            } else {
                                this.$Message.error(res.data.msg);
                            }
                        })
                }
            }
        },
        mounted() {
            this.getEmail();
        }
    };
</script>

<style lang="less" scoped rel="stylesheet/less">
    table.basic {
        td:first-child {
            width: 120px;
        }
        tr.password {
            td {
                padding-bottom: 30px;
                position: relative;
            }
        }
    }

    .hint {
        position: absolute;
        left: 210px;
        width: 200px;
        top: 1px;
        bottom: 1px;
        padding: 0 10px;
        color: #ed3f14;
        line-height: 30px;
        font-size: 1.4rem;
        background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff 8px);
    }
</style>
