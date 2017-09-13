<template>
    <router-view></router-view>
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
</style>
