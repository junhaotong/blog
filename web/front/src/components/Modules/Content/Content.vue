<template>
    <Row class="body">
        <appHeader v-if="$route.path !== '/sign'"></appHeader>
        <main class="container">
            <router-view></router-view>
        </main>
        <appFooter></appFooter>
    </Row>
</template>

<script>
    import {
        Header,
        Footer
    } from 'Components'

    export default {
        name: 'app',
        data() {
            return {
                theme: {
                    lightTheme: true,
                    darkTheme: false
                }
            }
        },
        methods: {
            chengeTheme(theme) {
                this.theme.lightTheme = false;
                this.theme.darkTheme = false;
                this.theme[theme] = true;
            }
        },
        components: {
            appHeader: Header,
            appFooter: Footer
        }
    }
</script>

<style lang="less">
    main.container {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    .container {
        width: 992px;
        margin: 0 auto;
        @media (max-width: 992px) {
            width: 768px;
        }
        @media (max-width: 768px) {
            width: 100%;
        }
    }

    .body {
        height: 100%;
        position: initial;
    }
</style>
