<template>
    <Row class="sign-wrapper">
        <div id="particles-js"></div>
        <div class="sign-dialog">
            <Tabs :value="tabName">
                <TabPane label="登录" name="login">
                    <Login></Login>
                </TabPane>
                <TabPane label="注册" name="regist">
                    <Regist :tabName.sync="tabName"></Regist>
                </TabPane>
            </Tabs>
        </div>
    </Row>
</template>

<script>
    import 'node_modules/particles.js/particles';
    import particlesJSON from 'static/particles.json';

    import Login from './Login';
    import Regist from './Regist';

    export default {
        name: 'Sign',
        data() {
            return {
                tabName: 'login'
            }
        },
        methods: {
            login() {
                this.pwdError = '';
                this.usernameError = '';
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.axios.post('/admin/login', this.loginForm)
                            .then(res => {
                                if (res.data.code === 0) {
                                    this.$Message.success(res.data.msg);
                                    this.$store.dispatch('update_userinfo');
                                    this.$router.push('/');
                                } else if(res.data.code === 2001) {
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
            particlesJS('particles-js', particlesJSON);
        },
        components: {
            Login,
            Regist
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    body>.sign-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        #particles-js {
            width: 100%;
            height: 100%;
        }
    }

    .sign-wrapper {
        .sign-dialog {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 300px;
            height: 300px;
            margin-left: -150px;
            margin-top: -150px;
            text-align: center;
            .ivu-tabs-bar {
                border-bottom: 0;
                margin-bottom: 30px;
                .ivu-tabs-nav-scroll {
                    width: 150px;
                    margin: 0 auto;
                }
                .ivu-tabs-tab {
                    font-size: 16px;
                }
            }
        }
    }
</style>
