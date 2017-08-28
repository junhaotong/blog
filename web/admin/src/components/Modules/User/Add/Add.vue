<template>
    <Row>
        <i-col span="12">
            <Form :model="UserForm" ref="UserForm" :rules="rules" :label-width="100">
                <Form-item label="用户头像">
                    <Upload
                            action="/api/upload/image"
                            name="image"
                            :show-upload-list="false"
                            :on-success="uploadSuccess">
                        <div class="upload">
                            <img v-if="UserForm.avatar" :src="'/' + UserForm.avatar" alt="">
                            <template v-else>
                                <Icon type="ios-cloud-upload-outline"></Icon>上传头像
                            </template>
                        </div>
                    </Upload>
                </Form-item>
                <Form-item label="用户名" prop="username">
                    <Input class="middle-input" v-model="UserForm.username" placeholder="请输入用户名"/>
                </Form-item>
                <Form-item label="邮箱" prop="email">
                    <Input class="middle-input" v-model="UserForm.email" placeholder="请输入邮箱"/>
                </Form-item>
                <Form-item label="密码" prop="pwd">
                    <Input class="middle-input" type="password" v-model="UserForm.pwd" placeholder="请输入用户密码"/>
                </Form-item>
                <Form-item label="再次输入密码" prop="re_pwd" :required="true">
                    <Input class="middle-input" type="password" v-model="UserForm.re_pwd" placeholder="再次输入密码"/>
                </Form-item>
                <Form-item label="用户类型">
                    <span>普通用户</span>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="regist">确认注册</Button>
                </Form-item>
            </Form>
        </i-col>
    </Row>
</template>

<script>
    export default {
        name: 'UserAdd',
        data() {
            return {
                UserForm: {
                    avatar: '',
                    username: '',
                    email: '',
                    pwd: '',
                    re_pwd: ''
                },
                rules: {
                    username: {required: true, message: '用户名不能为空', trigger: 'blur'},
                    email: [
                        {required: true, message: '邮箱不能为空', trigger: 'blur'},
                        {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
                    ],
                    pwd: [
                        {required: true, message: '密码不能为空', trigger: 'blur'},
                        {min: 6, max: 20, message: '密码应为6-20位', trigger: 'blur'}
                    ],
                    re_pwd: {
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请再次输入密码'));
                            } else if (value !== this.UserForm.pwd) {
                                callback(new Error('两次输入密码不一致!'));
                            } else {
                                callback();
                            }
                        }, trigger: 'blur'
                    }
                }
            }
        },
        methods: {
            /**
             * 上传头像成功回调
             */
            uploadSuccess(res, file, fileList) {
                if (res.code === 0) {
                    this.UserForm.avatar = res.data.avatar;
                } else {
                    this.$Message.error(res.msg);
                }
            },
            /**
             * 注册用户
             */
            regist() {
                this.$refs.UserForm.validate(valid => {
                    if (valid) {
                        this.axios.post('/admin/regist', this.UserForm)
                            .then(res => {
                                if (res.data.code === 0) {
                                    this.$Message.success(res.data.msg);
                                } else {
                                    this.$Message.error(res.data.msg);
                                }
                            })
                    }
                })
            }
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    .upload {
        width: 150px;
        height: 150px;
        border: 1px solid #ddd;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        cursor: pointer;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
</style>
