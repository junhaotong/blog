/**
 * Created by apple on 2017/9/22.
 */
import Editor from 'wangeditor';

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
                name: {required: true, message: '分类名不能为空', trigger: 'blur'}
            }
        }
    },
    methods: {
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
                    let data = {...this.Form};
                    data['description'] = this.editor.txt.html();
                    this.axios.post('/category', data)
                        .then(res => {
                            if (res.data.code === 0) {
                                this.$Message.success(res.data.msg)
                            } else {
                                this.$Message.error(res.data.msg)
                            }
                        })
                }
            })
        }
    },
    mounted() {
        this.editor = new Editor('#editor');
        this.editor.customConfig.zIndex = 1;
        this.editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
        this.editor.create();
    }
};