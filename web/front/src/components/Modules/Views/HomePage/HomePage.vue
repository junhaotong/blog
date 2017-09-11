<template>
    <Row>
        <ToTop></ToTop>
        <div v-for="a in arr">老铁,我是首页,HelloWorld!!!</div>
    </Row>
</template>

<script>
    import { ToTop } from 'Components';

    export default {
        name: 'homePage',
        data() {
            return {
                arr: new Array().length = 100
            }
        },
        mounted() {
            console.log(ToTop);
        },
        components: {
            ToTop
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    .a {
        font-size: 20px;
    }
</style>
