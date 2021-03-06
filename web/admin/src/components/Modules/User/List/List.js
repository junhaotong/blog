/**
 * Created by apple on 2017/9/1.
 */
export default {
    name: 'UserList',
    data() {
        return {
            columns: [{
                type: 'index',
                width: 80,
                align: 'center'
            }, {
                title: '用户名',
                align: 'center',
                key: 'username'
            }, {
                title: '邮箱',
                align: 'center',
                key: 'email',
                width: 180
            }, {
                title: '头像',
                align: 'center',
                render: (h, row) => {
                    return h('img', {
                        attrs: {
                            src: `/${row.row.avatar}`
                        },
                        'class': {
                            avatar: true
                        }
                    })
                }
            }, {
                title: '注册时间',
                align: 'center',
                key: 'create_at',
                width: 150
            }, {
                title: '用户类型',
                align: 'center',
                render: (h, row) => {
                    let type;
                    switch (row.row.type) {
                        case 1:
                            type = '普通用户';
                            break;
                        case 2:
                            type = '管理员';
                    }
                    return h('span', type)
                }
            }, {
                title: '用户状态',
                align: 'center',
                render: (h, row) => {
                    let status;
                    switch (row.row.status) {
                        case 0:
                            status = '正常';
                            break;
                        case -1:
                            status = '禁止登录';
                    }
                    return h('span', status)
                }
            }, {
                title: '操作',
                align: 'center',
                fixed: 'right',
                render: (h, row) => {
                    let option;
                    switch (row.row.status) {
                        case 0:
                            option = h('Button', {
                                props: {
                                    type: 'error'
                                },
                                on: {
                                    click: () => {
                                        this.changeStatus(row.row._index)
                                    }
                                }
                            }, '禁止登录');
                            break;
                        case -1:
                            option = h('Button', {
                                props: {
                                    type: 'success'
                                },
                                on: {
                                    click: () => {
                                        this.changeStatus(row.row._index)
                                    }
                                }
                            }, '允许登录');
                            break;
                    }
                    return option;
                }
            }],
            data: [],
            ladingStatus: false
        }
    },
    methods: {
        /**
         * 获取用户列表
         * @param page
         */
        getUserList(page = 1) {
            this.ladingStatus = true;
            this.axios.get('/admin/user', {page: page})
                .then(res => {
                    if (res.data.code === 0) {
                        this.data = res.data.data;
                    }
                    this.ladingStatus = false;
                })
        },

        /**
         * 禁止/运行登录
         * @param index
         */
        changeStatus(index) {
            let row = this.data[index];
            this.axios.post('/admin/change_status', {
                id: row.id
            })
                .then(res => {
                    if (res.data.code === 0) {
                        row.status = res.data.data.status;
                    } else {
                        this.$Message.error('操作失败');
                    }
                });
        }
    },
    mounted() {
        this.getUserList();
    }
};
