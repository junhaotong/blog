<template>
    <Row class="setting-wrapper">
        <div class="setting-menu">
            <div class="menu-item">
                <router-link to="/setting/basic">
                    <Icon type="person"></Icon>
                    基础信息
                </router-link>
            </div>
        </div>
        <div class="setting-content">
            <router-view></router-view>
        </div>
    </Row>
</template>

<script>
    export default {
        name: 'Setting'
    };
</script>

<style lang="less" rel="stylesheet/less">
    .setting-wrapper {
        display: flex;
        .setting-menu {
            flex: 0 0 200px;
            a {
                display: flex;
                /*align-items: center;*/
                padding: 10px 15px;
                color: #495060;
                i {
                    font-size: 18px;
                    margin-right: 10px;
                }
                &.router-link-active {
                    background-color: #e9eaec;
                }
            }
        }
        .setting-content {
            flex: 1;
            padding-left: 20px;
        }
    }
</style>
