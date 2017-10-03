/**
 * Created by apple on 2017/9/22.
 */
import wangEditor from 'wangeditor/release/wangEditor';

export default {
    name: 'PostAdd',
    data() {
        return {
            editor: {},
            tagName: '',
            categoryList: [],
            postForm: {
                title: '',
                content: '',
                category_id: '',
                tags: []
            },
            menus: [
                'head',  // 标题
                'bold',  // 粗体
                'italic',  // 斜体
                'underline',  // 下划线
                'strikeThrough',  // 删除线
                'foreColor',  // 文字颜色
                'backColor',  // 背景颜色
                'link',  // 插入链接
                'list',  // 列表
                'justify',  // 对齐方式
                'quote',  // 引用
                'image',  // 插入图片
                'table',  // 表格
                'video',  // 插入视频
                'code',  // 插入代码
                'undo',  // 撤销
                'redo'  // 重复
            ]
        }
    },
    methods: {
        /**
         * 初始化富文本编辑器
         */
        initEditor() {
            this.editor = new wangEditor('#editor');
            this.editor.customConfig.debug = true;
            this.editor.customConfig.menus = this.menus;
            // 开启base64上传图片
            this.editor.customConfig.uploadImgShowBase64 = true;
            this.editor.customConfig.zIndex = 1;
            this.editor.customConfig.height = 500;
            this.editor.create();
        },
        /**
         * 添加标签
         */
        addTag() {
            if (this.postForm.tags.length >= 5) {
                this.$Message.error('最多添加5个标签');
                return;
            }
            if (this.tagName) {
                if (this.postForm.tags.includes(this.tagName)) {
                    this.$Message.error('该标签已添加');
                } else {
                    this.postForm.tags.push(this.tagName);
                    this.tagName = '';
                }
            }
        },
        /**
         * 移除标签
         * @param event
         * @param name
         */
        removeTag(event, name) {
            let index = this.postForm.tags.indexOf(name);
            this.postForm.tags.splice(index, 1);
        },
        /**
         * 获取所有文章分类
         */
        getCategories() {
            return new Promise((resolve, reject) => {
                this.axios.get('/category')
                    .then(res => {
                        if (res.data.code === 0) {
                            this.categoryList = res.data.data;
                            resolve(res);
                        } else {
                            this.$Message.error(res.data.msg);
                            resolve(res);
                        }
                    })
                    .catch(function (err) {
                        reject(err);
                    });
            })
        },
        /**
         * 发布文章
         */
        submit() {
            this.postForm.content = this.editor.txt.html();
            
            if (this.postForm.title === '') {
                this.$Message.error('文章标题不能为空');
                return;
            }
            if (this.postForm.content === '') {
                this.$Message.error('文章内容不能为空');
                return;
            }
            if (this.postForm.category_id === '') {
                this.$Message.error('请选择文章分类');
                return;
            }

            this.axios.post('post', this.postForm)
                .then(res => {
                    if (res.data.code === 0) {
                        this.$Message.success(res.data.msg);
                    } else {
                        this.$Message.error(res.data.msg);
                    }
                })
        }
    },
    created() {
        if (!this.$store.state.userinfo.userinfo.token) {
            this.$Message.error('请先登录或注册');
            this.$router.push('/sign');
        }
    },
    mounted() {
        this.initEditor();
        this.getCategories();
    }
};