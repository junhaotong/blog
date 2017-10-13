<template>
    <footer class="footer">
        2017&copy; Content By Jeremy. All Rights Reserved
        备案号: <a href="http://www.miitbeian.gov.cn" target="_blank">浙ICP备17037676号</a>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    };
</script>

<style lang="less" scoped rel="stylesheet/less">
    .footer {
        margin-top: 30px;
        padding: 15px;
        background-color: #373d41;
        color: #fff;
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        a {
            color: #fff;
            text-decoration: underline;
        }
    }
</style>
