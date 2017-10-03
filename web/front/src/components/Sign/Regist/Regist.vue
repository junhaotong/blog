<template>
    <Row>
        <Form :model="registForm" ref="registForm">
            <FormItem class="form-item">
                <Input
                        v-model="registForm.username"
                        placeholder="用户名"/>
                <transition name="slide-fade">
                    <div class="hint" v-if="usernameError">{{usernameError}}</div>
                </transition>
            </FormItem>
            <FormItem class="form-item">
                <Input
                        v-model="registForm.email"
                        placeholder="邮箱"/>
                <transition name="slide-fade">
                    <div class="hint" v-if="emailError">{{emailError}}</div>
                </transition>
            </FormItem>
            <FormItem class="form-item get-code">
                <Input
                        v-model="registForm.code"
                        placeholder="验证码"/>
                <Button class="btn-get-code" type="text">获取验证码</Button>
            </FormItem>
            <FormItem></FormItem>
        </Form>
    </Row>
</template>

<script>
    export default {
        name: 'regist',
        data() {
            return {
                registForm: {
                    username: '',
                    email: '',
                    code: ''
                },
                emailError: '',
                usernameError: ''
            }
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    .sign-wrapper {
        .get-code {
            .ivu-form-item-content {
                display: flex;
            }
            .btn-get-code {
                width: 100px;
                border: 1px solid #dddee1;
                border-radius: 0;
                border-top: 0;
                border-left: 0;
            }
        }
    }
</style>
