/**
 * Created by apple on 2017/9/22.
 */
import wangEditor from 'wangeditor/release/wangEditor';
export default {
    name: 'Post',
    data() {
        return {
            editor: {},
            title: '',
            tagName: '',
            tabList: [],
            categoryList: []
        }
    },
    methods: {
        /**
         * 初始化富文本编辑器
         */
        initEditor() {
            this.editor = new wangEditor('#editor');
            this.editor.customConfig.debug = true;
            console.log(this.editor);
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
            if (this.tagName) {
                if (this.tabList.includes(this.tagName)) {
                    this.$Message.error('该标签已添加');
                } else {
                    this.tabList.push(this.tagName);
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
            console.log(name);
            const index = this.tabList.indexOf(name);
            this.tabList.splice(index, 1);
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