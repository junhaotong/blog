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
                <Button type="primary" class="login-btn" @click="login">登录</Button>
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
                captchaStatus: true
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
                        this.$Message.success('登陆成功');
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
    #captcha {
        margin-top: 20px;
        .geetest_logo {
            display: none;
        }
    }

    .form-item {
        position: relative;
        margin-bottom: 0;
        input {
            font-size: 14px;
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
            right: 0;
            top: 0;
            padding: 0 10px;
            color: #ed3f14;
            line-height: 40px;
            font-size: 14px;
            background: radial-gradient(#fff, #fff, transparent);
        }

        .login-btn {
            width: 100%;
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

</style>