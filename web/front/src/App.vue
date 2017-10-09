<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import {Header} from './components/Modules/Components'

    export default {
        name: 'app',
        components: {
            appHeader: Header
        }
    }
</script>

<style lang="less">
    html {
        font-size: 62.5%;
        input {
            appearance: none;
        }
    }

    main.container {
        padding-top: 20px;
    }

    body {
        position: absolute !important;
        top: 0;
        left: 0;
        right: 0;
        padding-bottom: 110px;
        min-height: 100%;
        font-size: 14px;
    }

    ol {
        list-style-type: decimal;
    }

    ul {
        list-style-type: disc;
    }

    .container {
        padding: 0 15px;
        width: 992px;
        margin: 0 auto;
        @media (max-width: 992px) {
            width: 768px;
        }
        @media (max-width: 768px) {
            width: 100%;
        }
    }

    .text-center {
        text-align: center;
    }

    .pull-right {
        float: right !important;
    }

    .pull-left {
        float: left !important;
    }

    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition: all .3s ease;
    }

    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }

        /* table 样式 */
    table {
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;
    }

    table td,
    table th {
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        padding: 3px 5px;
    }

    table th {
        border-bottom: 2px solid #ccc;
        text-align: center;
    }

    /* blockquote 样式 */
    blockquote {
        display: block;
        border-left: 8px solid #d0e5f2;
        padding: 5px 10px;
        margin: 10px 0;
        line-height: 1.4;
        font-size: 100%;
        background-color: #f1f1f1;
    }

    /* code 样式 */
    code {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        background-color: #f1f1f1;
        border-radius: 3px;
        padding: 3px 5px;
        margin: 0 3px;
    }

    pre code {
        display: block;
    }

    /* ul ol 样式 */
    ul, ol {
        margin: 10px 0 10px 20px;
    }
</style>
