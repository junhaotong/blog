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
                                @on-enter="onSearch"
                                v-model="search"
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
                            <DropdownMenu class="menu" slot="list">
                                <DropdownItem>
                                    <router-link to="/my_posts">我的文章</router-link>
                                </DropdownItem>
                                <DropdownItem>
                                    <router-link to="/setting">个人信息</router-link>
                                </DropdownItem>
                                <DropdownItem>
                                    <span @click="logout">退出</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Button
                                type="primary"
                                icon="edit"
                                shape="circle"
                                class="btn-post"
                                v-if="$route.path !== '/post/add'">
                            <router-link to="/post/add">发表文章</router-link>
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
                search: ''
            }
        },
        methods: {
            onSearch() {
                this.$router.push({
                    path: '/search',
                    query: {
                        search: this.search
                    }
                })
            },
            logout() {
                this.$store.dispatch('logout');
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
