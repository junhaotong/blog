<template>
    <Row>
        <Table v-loading="loading" border :columns="columns" :data="data"></Table>
    </Row>
</template>

<script>
    export default {
        name: 'CategoryList',
        data() {
            return {
                columns: [{
                    type: 'index',
                    width: 60,
                    align: 'center'
                }, {
                    title: '分类名',
                    align: 'center',
                    key: 'name'
                }, {
                    title: '图片',
                    align: 'center',
                    width: 200,
                    render: (h, row) => {
                        return h('img', {
                            'class': {
                                avatar: true
                            },
                            attrs: {
                                src: row.row.image || '#',
                                width: '100%'
                            }
                        })
                    },
                }, {
                    title: '添加人',
                    align: 'center',
                    key: 'username'
                }, {
                    title: '创建时间',
                    align: 'center',
                    key: 'create_time'
                }, {
                    title: '操作',
                    width: 150,
                    align: 'center',
                    render: (h, row) => {
                        return h('div', {
                            'class': {
                                'table-options': true
                            }
                        }, [
                            h('router-link', {
                                props: {
                                    to: `/category/show?id=${row.row.id}`
                                }
                            }, '详情'),
                            h('router-link', {
                                props: {
                                    to: `/category/edit?id=${row.row.id}`
                                }
                            }, '修改')
                        ])
                    }
                }],
                data: [],
                loading: false
            }
        },
        methods: {
            getList(page = 1) {
                this.loading = true;
                this.axios.get('/category', {page: page})
                    .then(res => {
                        if (res.data.code === 0) {
                            this.data = res.data.data;
                        } else {
                            this.$Message.error(res.data.msg);
                        }
                        this.loading = false;
                    })
            }
        },
        mounted() {
            this.getList();
        }
    };
</script>

<style lang="less" rel="stylesheet/less">

</style>
