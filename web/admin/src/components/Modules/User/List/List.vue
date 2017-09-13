<template>
    <Row>
        <Table border v-loading="ladingStatus" :columns="columns" class="user-list" :data="data"></Table>
    </Row>
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
