<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="less" rel="stylesheet/less">
    body {
        margin: 0;
        padding: 0;
        font-size: 14px;
    }

    .pull-right {
        float: right !important;
    }

    .middle-input {
        width: 300px;
    }

    .upload {
        width: 150px;
        height: 150px;
        border: 1px solid #ddd;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        cursor: pointer;
        overflow: hidden;
        img {
            width: 100%;
        }
    }

    .table-options {
        a {
            margin-right: 10px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>
