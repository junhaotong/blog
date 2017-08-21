<template>
    <Row>
        <i-col span="12">
            <Form :model="UserForm" :rules="rules" :label-width="100">
                <Upload action="/api/upload/image" name="image" class="uplaod">
                    <Button type="ghost" icon="ios-cloud-upload-outline">上传头像</Button>
                </Upload>
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
                    <Select class="middle-input" v-model="UserForm.user_type">
                        <Option value="1">普通用户</Option>
                        <Option value="2">管理员</Option>
                    </Select>
                </Form-item>
                <Form-item>
                    <Button type="primary">确认注册</Button>
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
                    re_pwd: '',
                    user_type: ''
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
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    .uplaod {
        width: 150px;
        height: 150px;
    }
</style>
