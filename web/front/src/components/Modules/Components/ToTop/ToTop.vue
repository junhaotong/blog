<template>
    <BackTop class="to-top" :height="100" :bottom="30">
        <Icon type="chevron-up"></Icon>
    </BackTop>
</template>

<script>
    export default {
        name: 'toTop'
    };
</script>

<style lang="less" rel="stylesheet/less">
    .to-top {
        background-color: #fff;
        border: 1px solid #2d8cf0;
        transition: all .4s ease-in-out;
        border-radius: 5px;
        opacity: 0;
        display: block;
        transform: translate(0, 200px);
        i {
            display: flex;
            padding: 0;
            justify-content: center;
            align-items: center;
            color: #2d8cf0;
            width: 40px;
            height: 40px;
        }
        &.ivu-back-top-show {
            opacity: 1;
            transform: translate(0, 0);
        }
    }
</style>
