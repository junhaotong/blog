<template>
    <Row>
        <Table border v-loading="loading" :columns="columns" :data="data"></Table>
        <div class="pagination">
            <Page :total="total" :current="currentPage" @on-change="getArticles" show-total></Page>
        </div>
    </Row>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                columns: [{
                    title: '文章id',
                    align: 'center',
                    width: 100,
                    key: 'id'
                }, {
                    title: '文章标题',
                    align: 'center',
                    width: 200,
                    ellipsis: true,
                    render: (h, row) => {
                        return h('router-link', {
                            props: {
                                to: `/article/show/${row.row.id}`
                            }
                        }, row.row.title)
                    }
                }, {
                    title: '描述',
                    align: 'center',
                    width: 300,
                    key: 'description',
                    ellipsis: true
                }, {
                    title: '标签',
                    align: 'center',
                    width: 200,
                    render: (h, row) => {
                        let tags = [];
                        row.row.tags.forEach(tag => {
                            tags.push(h('Tag', {
                                props: {
                                    color: 'blue'
                                }
                            }, tag));
                        })
                        return h('div', tags);
                    }
                }, {
                    title: '作者',
                    align: 'center',
                    width: 180,
                    key: 'author'
                }, {
                    title: '热度',
                    align: 'center',
                    width: 100,
                    render: (h, row) => {
                        return h('div', [
                            h('Icon', {
                                props: {
                                    type: 'fireball'
                                }
                            }),
                            h('span', row.row.hot)
                        ])
                    },
                    key: 'hot'
                }, {
                    title: '发布时间',
                    align: 'center',
                    width: 180,
                    key: 'create_time'
                }, {
                    title: '最后更新时间',
                    align: 'center',
                    width: 180,
                    key: 'update_time'
                }, {
                    title: '操作',
                    align: 'center',
                    width: 150,
                    fixed: 'right',
                    render: (h, row) => {
                        let btn;
                        if (Number(row.row.status) === 0) {
                            btn = h('Button', {
                                props: {
                                    type: 'error'
                                },
                                on: {
                                    click: () => {
                                        this.changeStatus(row.row._index);
                                    }
                                }
                            }, '删除');
                        } else {
                            btn = h('Button', {
                                props: {
                                    type: 'success'
                                },
                                on: {
                                    click: () => {
                                        this.changeStatus(row.row._index);
                                    }
                                }
                            }, '重新上架');
                        }
                        return btn;
                    }
                }],
                data: [],
                total: 0,
                currentPage: 1
            }
        },
        methods: {
            getArticles(page = 1) {
                this.loading = true;
                this.axios.get('/post', {
                    params: {
                        page: page,
                        order_by: 'time',
                        type: 'admin'
                    }
                })
                    .then(res => {
                        this.loading = false;
                        if (res.data.code === 0) {
                            this.data = res.data.data.data;
                            this.total = res.data.data.count;
                        } else {
                            this.$Message.error(res.data.msg);
                        }
                    })
            },
            /**
             * 更改文章状态
             * @param index
             */
            changeStatus(index) {
                let row = this.data[index];
                this.axios.post('/admin/post/change_status', {
                    id: row.id
                })
                    .then(res => {
                        if (res.data.code === 0) {
                            row.status = res.data.data.status;
                        } else {
                            this.$Message.error('操作失败')
                        }
                    })
            }
        },
        mounted() {
            this.getArticles();
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    .pagination {
        margin-top: 15px;
        text-align: right;
    }
</style>
