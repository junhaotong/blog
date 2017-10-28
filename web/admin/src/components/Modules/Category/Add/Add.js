/**
 * Created by apple on 2017/9/22.
 */
import Editor from 'wangeditor';
import router from '../../../../router/index';

export default {
    name: 'CategoryAdd',
    data() {
        return {
            Form: {
                image: '',
                name: '',
                description: ''
            },
            rules: {
                name: {
                    required: true,
                    message: '分类名不能为空',
                    trigger: 'blur'
                }
            }
        };
    },
    methods: {
        /**
         * 获取分类详情
         */
        getDetail() {
            let id = this.$route.query.id;
            this.axios.get(`/category/${id}`)
            .then(res => {
                if (res.data.code === 0) {
                    this.Form.image = res.data.data.image;
                    this.Form.name = res.data.data.name;
                    this.editor.txt.html(res.data.data.description);
                    this.Form.id = res.data.data.id;
                } else {
                    this.$Message.error(res.data.msg);
                }
            })
        },
        /**
         * 初始化富文本编辑器
         */
        inieEditor() {
            this.editor = new Editor('#editor');
            this.editor.customConfig.zIndex = 1;
            this.editor.customConfig.uploadImgServer = '/api/upload/image';
            this.editor.customConfig.uploadFileName = 'image';
            this.editor.customConfig.uploadImgHooks = {
                customInsert: function (insertImg, result, editor) {
                    var url = result.data.avatar;
                    insertImg(url)
                }
            }
            this.editor.customConfig.uploadImgHeaders = {
                'Authorization': this.$store.state.userinfo.userinfo.token
            };
            this.editor.create();
        },
        /**
         * 上传头像成功回调
         */
        uploadSuccess(res, file, fileList) {
            if (res.code === 0) {
                this.Form.image = res.data.avatar;
            } else {
                this.$Message.error(res.msg);
            }
        },
        /**
         * 新增文章分类
         */
        submit() {
            this.$refs.Form.validate(valid => {
                if (valid) {
                    let data = { ...this.Form};
                    data['description'] = this.editor.txt.html();
                    if (this.$route.path === '/category/edit' && this.$route.query.id) {
                        // 修改分类
                        this.axios.put(`/category/${data.id}`, data)
                        .then(res => {
                            if (res.data.code === 0) {
                                this.$Message.success('更新成功');
                                this.$router.push('/category');
                            } else {
                                this.$Message.error(res.data.msg);
                            }
                        })
                    } else {
                        // 新增分类
                        this.axios.post('/category', data)
                        .then(res => {
                            if (res.data.code === 0) {
                                this.$Message.success(res.data.msg)
                            } else {
                                this.$Message.error(res.data.msg)
                            }
                        });
                    }
                }
            })
        }
    },
    mounted() {
        this.inieEditor();
        if(this.$route.path === '/category/edit' && this.$route.query.id) {
            this.getDetail();
        }
    }
};
