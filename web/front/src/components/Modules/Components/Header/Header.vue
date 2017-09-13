<template>
    <header ref="header">
        <Row type="flex" align="middle" justify="space-between" class="header container">
            <i-col>
                <router-link to="/" class="logo">Jeremy'</router-link>
            </i-col>
            <i-col>
                <Row type="flex" align="middle">
                    <div class="search">
                        <Input
                                @on-blur="change"
                                class="search-input"
                                icon="ios-search-strong"
                                placeholder="请输入搜索内容"/>
                    </div>
                    <div class="user" v-if="$store.state.userinfo.userinfo.username">
                        <Dropdown>
                            <a href="javascript:void(0)" class="username">
                                {{$store.state.userinfo.userinfo.username}}


                                <Icon type="arrow-down-b"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem>修改个人信息</DropdownItem>
                                <DropdownItem>退出登录</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Button
                                type="primary"
                                icon="edit"
                                shape="circle"
                                class="btn-post"
                                v-if="$route.path !== '/post'">
                            <router-link to="/post">发表文章</router-link>
                        </Button>
                    </div>
                    <router-link class="sign" to="/sign" v-else>登录</router-link>
                </Row>
            </i-col>
        </Row>
    </header>
</template>

<script>
    import Headroom from 'headroom.js';

    export default {
        name: 'heaer',
        data() {
            return {
                searchStatus: false
            }
        },
        methods: {
            change() {
                this.searchStatus = !this.searchStatus;
            }
        },
        mounted() {
            var headroom = new Headroom(this.$refs.header);
            headroom.init();
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    @import "Header";
</style>
