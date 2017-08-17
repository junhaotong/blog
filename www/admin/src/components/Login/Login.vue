<template>
    <Row class="login-wrapper">
        <canvas id="login"></canvas>
        <div class="login-dialog">
            <div class="title">登录</div>
            <Input class="input" v-model="username" placeholder="请输入用户名"/>
            <Input class="input" v-model="password" placeholder="请输入密码"/>
            <Button class="btn-login">登录</Button>
        </div>
    </Row>
</template>

<script>
    import '../../assets/lib/dot';

    export default {
        name: 'AdminLogin',
        data() {
            return {
                username: '',
                password: ''
            }
        },
        mounted() {
            Dot('login');
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    .login-wrapper {
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
            background: rgba(53, 60, 66, 0.89);
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
                margin-bottom: 15px;
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
