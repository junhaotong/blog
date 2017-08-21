<template>
    <Row class="layout" type="flex">
        <div class="menu-left">
            <div class="logo">Jeremy</div>
            <Menu theme="dark" width="auto" :active-name="$route.path" :open-names="[$route.matched[0].path]">
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
            }
        }
    };
</script>

<style lang="less" scoped rel="stylesheet/less">
    .layout {
        position: absolute;
        height: 100%;
        width: 100%;
        .menu-left {
            background: #464c5b;
            flex: 0 0 200px;
            overflow-y: auto;
            .logo {
                width: 90%;
                height: 30px;
                background: #5b6270;
                border-radius: 3px;
                margin: 15px auto;
                color: #fff;
                font-size: 15px;
                line-height: 30px;
                text-align: center;
            }
            .menu-icon {
                font-size: 15px;
            }
        }
        .content-right {
            flex: 1;
            overflow-y: auto;
            .layout-ceiling{
                background: #464c5b;
                padding: 10px 10px;
                overflow: hidden;
                height: 60px;
                .cailing-item {
                    line-height: 40px;
                    color: #fff;
                    font-size: 14px;
                    display: inline-block;
                    padding: 0 20px;
                    a {
                        color: #fff;
                    }
                }
            }
            .main {
                .bread {
                    background: #F7F7F7;
                    padding: 15px;
                }
                .content {
                    padding: 15px;
                }
            }
        }
    }
</style>
