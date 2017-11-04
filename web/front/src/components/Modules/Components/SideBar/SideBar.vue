<template>
    <div class="TopstorySideBar">
        <div class="bar-list">
            <router-link class="bar-item" to="/new">
                <Icon type="ios-book"></Icon>最新文章
            </router-link>
            <router-link class="bar-item" to="/">
                <Icon type="fireball"></Icon>最热文章
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="less" scoped>
.TopstorySideBar {
    flex: 0 0 300px;
    padding-left: 30px;
    @media (max-width: 768px) {
        display: none;
    }
    .bar-list {
        border: 1px solid #e9eaec;
        border-radius: 4px;
        overflow: hidden;
        .bar-item {
            display: block;
            color: #495060;
            font-size: 16px;
            padding: 10px 15px;
            &.router-link-exact-active {
                color: #fff;
                background: #2d8cf0;
            }
            i {
                margin-right: 10px;
            }
            & + .bar-item {
                padding-top: 10px;
            }
        }
    }
}
</style>

