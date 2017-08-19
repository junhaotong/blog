<template>
    <Row class="layout" type="flex">
        <div class="menu-left">
            <div class="logo">Jeremy</div>
            <Menu theme="dark" width="auto">
                <Submenu name="用户列表">
                    <template slot="title">
                        <Icon class="menu-icon" type="android-person"></Icon>
                        <span class="menu-text">用户管理</span>
                    </template>
                    <Menu-item name="1-1">
                        <Icon class="menu-icon" type="ios-list-outline"></Icon>
                        <span class="menu-text">用户列表</span>
                    </Menu-item>
                </Submenu>
            </Menu>
        </div>
        <div class="content-right">
            <div class="layout-ceiling">
                <!--<router-link class="cailing-item" to="/">首页</router-link>-->
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
            <div class="content">
                <Breadcrumb>
                    <Breadcrumb-item href="/">首页</Breadcrumb-item>
                    <Breadcrumb-item href="/">Components</Breadcrumb-item>
                    <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
                </Breadcrumb>
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

<style lang="less" rel="stylesheet/less">
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
            .content {
                padding: 15px;
            }
        }
    }
</style>
