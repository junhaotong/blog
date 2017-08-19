<template>
    <Row class="login-wrapper">
        <canvas id="login"></canvas>
        <div class="login-dialog">
            <div class="title">登录</div>
            <Form ref="loginForm" :model="loginForm" :rules="loginRules">
                <Form-item prop="username" :error="usernameError">
                    <Input class="input" v-model="loginForm.username" placeholder="请输入用户名"/>
                </Form-item>
                <Form-item prop="password" :error="pwdError">
                    <Input class="input" type="password" v-model="loginForm.password" placeholder="请输入密码"/>
                </Form-item>
                <Button class="btn-login" @click="login">登录</Button>
            </Form>
        </div>
    </Row>
</template>

<script>
    import '../../assets/lib/dot';
    import qs from 'qs';

    export default {
        name: 'AdminLogin',
        data() {
            return {
                loginForm: {
                    username: '',
                    password: '',
                },
                loginRules: {
                    username: {required: true, message: '用户名不能为空', trigger: 'blur'},
                    password: {required: true, message: '密码不能为空', trigger: 'blur'}
                },
                usernameError: '',
                pwdError: ''
            }
        },
        methods: {
            login() {
                this.pwdError = '';
                this.usernameError = '';
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.axios.post('/api/login', qs.stringify(this.loginForm))
                            .then(res => {
                                if (res.data.code === '10000') {
                                    this.$Message.success(res.data.msg);
                                    this.$store.dispatch('update_userinfo');
                                    this.$router.push('/');
                                } else if(res.data.code === '20001') {
                                    this.pwdError = res.data.msg;
                                } else {
                                    this.usernameError = res.data.msg;
                                }
                            });
                    }
                })
            }
        },
        mounted() {
            Dot('login', {
                cW: 1500,
                cH: 650
            });
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    body>.login-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        #login {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: rgba(8, 22, 35, 0.89);
        }
    }

    .login-wrapper {
        .login-dialog {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 200px;
            height: 200px;
            margin-left: -100px;
            margin-top: -100px;
            text-align: center;
            .title {
                font-size: 25px;
                margin-bottom: 20px;
                color: #fff;
            }
            .input input {
                background: rgba(255, 255, 255, .1);
                text-align: center;
                border-color: rgba(255, 255, 255, .3);
                color: #fff;
                /*margin-bottom: 15px;*/
            }
            .btn-login {
                width: 100%;
                &:hover {
                    color: rgb(53, 60, 66);
                    border:1px solid #fff;
                }
            }
        }
    }
</style>
