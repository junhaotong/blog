<template>
    <Row class="layout" type="flex">
        <div class="menu-left">
            <div class="logo">Jeremy</div>
            <Menu
                    theme="dark"
                    width="auto"
                    :active-name="$route.path"
                    :open-names="[$route.matched[0].path]"
                    @on-select="changeLeftMenu">
                <Submenu
                        v-for="(route,index) in $router.options.routes"
                        v-if="!route.hidden"
                        :name="route.path"
                        :key="route.path">
                    <template slot="title">
                        <Icon class="menu-icon" :type="route.icon"></Icon>
                        <span class="menu-text">{{route.name}}</span>
                    </template>
                    <Menu-item
                            v-for="item in route.children"
                            v-if="!item.hidden"
                            :key="item.path"
                            :name="route.path+'/'+item.path">
                        <Icon class="menu-icon" :type="item.icon"></Icon>
                        <span class="menu-text">{{item.name}}</span>
                    </Menu-item>
                </Submenu>
            </Menu>
        </div>
        <div class="content-right">
            <div class="layout-ceiling">
                <a class="cailing-item" href="javascript:void(0)">管理后台</a>
                <Dropdown class="cailing-item pull-right" trigger="click">
                    <a href="javascript:void(0)">
                        {{$store.state.userinfo.userinfo.username}}
                        <Icon type="arrow-down-b"></Icon>
                    </a>
                    <Dropdown-menu slot="list">
                        <Dropdown-item>
                            <span @click="logout">退出登录</span>
                        </Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
            </div>
            <div class="main">
                <Breadcrumb class="bread">
                    <Breadcrumb-item href="/">首页</Breadcrumb-item>
                    <Breadcrumb-item v-if="$route.matched[0]" :href="$route.matched[0].path">{{$route.matched[0].name}}</Breadcrumb-item>
                    <Breadcrumb-item v-if="$route.matched[1]">{{$route.matched[1].name}}</Breadcrumb-item>
                </Breadcrumb>
                <div class="content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </Row>
</template>

<script>
    import cookie from 'js-cookie';

    export default {
        name: 'content',
        data() {
            return {
            }
        },
        methods: {
            /**
             * 退出登录
             */
            logout() {
                this.$store.dispatch('logout')
                    .then(() => {
                        cookie.remove('userinfo');
                        this.$router.push('/login');
                    })
            },
            changeLeftMenu(path) {
                this.$router.push(path);
            }
        }
    };
</script>

<style lang="less" scoped rel="stylesheet/less">
    @import "Content";
</style>
