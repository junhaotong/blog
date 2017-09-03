<template>
    <div id="app">
        <img src="./assets/logo.png">
        <div id="captcha"></div>
        <div id="particles-js"></div>
    </div>
</template>

<script>
    import './assets/lib/gt';
    import 'node_modules/particles.js/particles';
    import particlesJSON from 'static/particles.json';

    export default {
        name: 'app',
        mounted() {
            this.axios.get('/captchas/new')
                .then(res => {
                    initGeetest({
                        // 以下配置参数来自服务端 SDK
                        gt: res.data.data.gt,
                        challenge: res.data.data.challenge,
                        offline: !res.data.data.success,
                        new_captcha: res.data.data.new_captcha,
                        product: 'float'
                    }, function (captchaObj) {
                        captchaObj.appendTo('#captcha');
                    })
                })
            particlesJS('particles-js', particlesJSON);
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
