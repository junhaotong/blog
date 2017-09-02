<template>
    <Table border :columns="columns" class="user-list" :data="data"></Table>
</template>

<script>
    import List from './List';
    export default List;
</script>

<style lang="less" rel="stylesheet/less">
    .user-list {
        img.avatar {
            width: 100%;
            margin: 10px 0;
        }
    }
</style>
