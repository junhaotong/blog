<template>
    <Row>
        <Form :model="registForm" ref="registForm" :rules="rules">
            <FormItem class="form-item" prop="username">
                <Input
                        v-model="registForm.username"
                        placeholder="用户名"/>
                <transition name="slide-fade">
                    <div class="hint" v-if="usernameError">{{usernameError}}</div>
                </transition>
            </FormItem>
            <FormItem class="form-item" prop="email">
                <Input
                        v-model="registForm.email"
                        placeholder="邮箱"/>
                <transition name="slide-fade">
                    <div class="hint" v-if="emailError">{{emailError}}</div>
                </transition>
            </FormItem>
            <FormItem class="form-item get-code" prop="code">
                <div class="code-item">
                    <Input
                            v-model="registForm.code"
                            placeholder="验证码"/>
                    <transition name="slide-fade">
                        <div class="hint" v-if="codeError">{{codeError}}</div>
                    </transition>
                </div>
                <Button class="btn-get-code" :disabled="codeStatus" type="text" @click="sendCode">{{codeMsg}}</Button>
            </FormItem>
            <FormItem class="form-item" prop="pwd">
                <Input
                        type="password"
                        v-model="registForm.pwd"
                        placeholder="密码"/>
                <transition name="slide-fade">
                    <div class="hint" v-if="pwdError">{{pwdError}}</div>
                </transition>
            </FormItem>
            <FormItem class="form-item" prop="re_pwd">
                <Input
                        type="password"
                        v-model="registForm.re_pwd"
                        placeholder="重新输入密码"/>
                <transition name="slide-fade">
                    <div class="hint" v-if="rePwdError">{{rePwdError}}</div>
                </transition>
            </FormItem>
            <FormItem class="form-item">
                <Button type="primary" class="regist-btn" long @click="regist">注册</Button>
            </FormItem>
        </Form>
    </Row>
</template>

<script>
    export default {
        name: 'regist',
        data() {
            const validUsername = (rule, value, callback) => {
                if (value === '') {
                    this.usernameError = '请输入用户名';
                } else {
                    this.usernameError = '';
                }
                callback();
            }
            const validEmail = (rule, value, callback) => {
                let emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
                if (value === '') {
                    this.emailError = '请输入邮箱';
                } else {
                    if (emailReg.test(value)) {
                        this.emailError = '';
                    } else {
                        this.emailError = '邮箱格式不正确';
                    }
                }
                callback();
            }
            const validCode = (rule, value, callback) => {
                if (value === '') {
                    this.codeError = '请输入验证码';
                } else {
                    this.codeError = '';
                }
                callback();
            }
            const validPwd = (rule, value, callback) => {
                if (value === '') {
                    this.pwdError = '请输入密码';
                } else {
                    let reg = /^[0-9A-Za-z]{6,20}$/;
                    if (reg.test(value)) {
                        this.pwdError = '';
                    } else {
                        this.pwdError = '6-20位字符或数字';
                    }
                }
                callback();
            }
            const validRePwd = (rule, value, callback) => {
                if (value === '') {
                    this.rePwdError = '请重新输入密码';
                } else {
                    if (value === this.registForm.pwd) {
                        this.rePwdError = '';
                    } else {
                        this.rePwdError = '两次密码不一致';
                    }
                }
                callback();
            }
            return {
                registForm: {
                    username: '',
                    email: '',
                    code: '',
                    pwd: '',
                    re_pwd: '',
                },
                emailError: '',
                usernameError: '',
                codeError: '',
                pwdError: '',
                rePwdError: '',
                codeMsg: '获取验证码',
                rules: {
                    username: {validator: validUsername, trigger: 'blur'},
                    email: {validator: validEmail, trigger: 'blur'},
                    code: {validator: validCode, trigger: 'blur'},
                    pwd: {validator: validPwd, trigger: 'blur'},
                    re_pwd: {validator: validRePwd, trigger: 'blur'}
                },
                codeStatus: false
            }
        },
        methods: {
            /**
             * 发送验证码
             */
            sendCode() {
                this.emailError = '';
                if (this.registForm.email === '') {
                    this.emailError = '请输入邮箱';
                    return;
                }
                this.axios.post('/send_code', {
                    email: this.registForm.email
                })
                    .then(res => {
                        if (res.data.code === 0) {
                            this.$Message.success(res.data.msg);
                            this.codeStatus = true;
                            let countDown = 59;
                            this.codeMsg = '60秒后重发';
                            let interval = setInterval(() => {
                                this.codeMsg = countDown + '秒后重发';
                                countDown --;
                                if (countDown === 0) {
                                    this.codeStatus = false;
                                    clearInterval(interval);
                                }
                            }, 1000);
                        } else {
                            this.$Message.error(res.data.msg);
                        }
                    })
            },
            /**
             * 注册
             */
            regist() {
                this.usernameError = '';
                if (this.registForm.username === '') {
                    this.usernameError = '请输入用户名';
                    return;
                }
                this.emailError = '';
                if (this.registForm.email === '') {
                    this.emailError = '请输入邮箱';
                    return;
                }

                this.axios.post('/regist', this.registForm)
                    .then(res => {
                        if (res.data.code === 0) {
                            this.$Message.success('注册成功')
                        } else {
                            this.$Message.error('注册失败')
                        }
                    })
            }
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    .sign-wrapper {
        .get-code {
            .code-item {
                width: calc(~'100% - 100px');
                position: relative;
            }
            .ivu-form-item-content {
                display: flex;
            }
            .btn-get-code {
                width: 100px;
                border: 1px solid #dddee1;
                border-radius: 0;
                border-top: 0;
                border-left: 0;
            }
        }
        .regist-btn {
            height: 35px;
            margin-top: 20px;
        }
    }
</style>
