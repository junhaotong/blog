<template>
    <Row>
        <Form :model="loginForm" ref="loginForm" :rules="rules">
            <FormItem class="form-item" prop="username">
                <Input
                        v-model="loginForm.username"
                        placeholder="用户名或邮箱"/>
                <transition name="slide-fade">
                    <div class="hint" v-if="usernameError">{{usernameError}}</div>
                </transition>
            </FormItem>
            <FormItem class="form-item" prop="password">
                <Input
                        type="password"
                        v-model="loginForm.password"
                        placeholder="密码"/>
                <transition name="slide-fade">
                    <div class="hint" v-if="passwordError">{{passwordError}}</div>
                </transition>
            </FormItem>
            <FormItem>
                <div id="captcha">
                    <template v-if="captchaStatus">
                        验证码加载中...
                    </template>
                </div>
            </FormItem>
            <FormItem class="form-item">
                <Button type="primary" class="login-btn" long @click="login">登录</Button>
            </FormItem>
        </Form>
    </Row>
</template>

<script>
    import 'assets/lib/gt';

    export default {
        name: 'Login',
        data() {
            const username = (rule, value, callback) => {
                if (value === '') {
                    this.usernameError = '用户名或邮箱不能为空';
                    callback(new Error());
                } else {
                    this.usernameError = '';
                    callback();
                }
            };
            const password = (rule, value, callback) => {
                if (value === '') {
                    this.passwordError = '密码不能为空';
                    callback(new Error());
                } else {
                    this.passwordError = '';
                    callback();
                }
            };
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: {validator: username, trigger: 'blur'},
                    password: {validator: password, trigger: 'blur'}
                },
                usernameError: '',
                passwordError: '',
                captchaStatus: true,
                captcha: {}
            }
        },
        methods: {
            /**
             * 加载验证码
             */
            getCaptchas() {
                this.axios.get('/captchas/new')
                    .then(res => {
                        initGeetest({
                            // 以下配置参数来自服务端 SDK
                            gt: res.data.data.gt,
                            challenge: res.data.data.challenge,
                            offline: !res.data.data.success,
                            new_captcha: res.data.data.new_captcha,
                            product: 'float'
                        }, captchaObj => {
                            this.captcha = captchaObj;
                            captchaObj.appendTo('#captcha');
                            captchaObj.onReady(() => {
                                this.captchaStatus = false;
                            });
                        })
                    })
            },
            /**
             * 登录
             */
            login() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        let captcha = this.captcha.getValidate();
                        if (captcha) {
                            this.axios.post('/login', {
                                geetest_challenge: captcha.geetest_challenge,
                                geetest_validate: captcha.geetest_validate,
                                geetest_seccode: captcha.geetest_seccode,
                                username: this.loginForm.username,
                                password: this.loginForm.password
                            })
                                .then(res => {
                                    if (res.data.code === 0) {
                                        this.$Message.success(res.data.msg);
                                        this.$store.dispatch('update_userinfo', res.data.data);
                                        this.$router.push('/');
                                    } else {
                                        if (res.data.code === 2000) {
                                            this.usernameError = res.data.msg;
                                        } else if (res.data.code === 2001) {
                                            this.passwordError = res.data.msg;
                                        } else {
                                            this.$Message.error(res.data.msg);
                                        }
                                        this.captcha.reset();
                                    }
                                })
                        } else {
                            this.$Message.error('验证码错误');
                        }
                    }
                })
            }
        },
        mounted() {
            this.getCaptchas();
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    .sign-wrapper {
        #captcha {
            margin-top: 20px;
        }

        .form-item {
            position: relative;
            margin-bottom: 0;
            input {
                font-size: 1.4rem;
                height: 40px;
                border-radius: 0;
                border-color: #dddee1 !important;
                &:focus,
                &:hover {
                    box-shadow: none !important;
                    border-color: #dddee1;
                }
            }
            & + .form-item {
                input {
                    border-top: 0;
                }
            }
            .hint {
                position: absolute;
                right: 1px;
                top: 1px;
                bottom: 1px;
                padding: 0 10px;
                color: #ed3f14;
                line-height: 40px;
                font-size: 1.4rem;
                background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff 8px);
            }

            .login-btn {
                height: 35px;
            }
        }

        .slide-fade-enter-active,
        .slide-fade-leave-active {
            transition: all .3s ease;
        }

        .slide-fade-enter, .slide-fade-leave-to {
            transform: translateX(20px);
            opacity: 0;
        }

        .ivu-form-item-error-tip {
            display: none;
        }
    }
</style>
