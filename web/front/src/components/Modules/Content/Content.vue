<template>
    <Row>
        <appHeader v-if="$route.path !== '/sign'"></appHeader>
        <main class="container">
            <router-view></router-view>
        </main>
    </Row>
</template>

<script>
    import { Header } from 'Components'

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
            appHeader: Header
        }
    }
</script>

<style lang="less">
    main.container {
        padding-top: 80px;
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
</style>
