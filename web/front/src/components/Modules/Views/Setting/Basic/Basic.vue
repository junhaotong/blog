<template>
    <Row>
        <table class="basic">
            <tr>
                <td>
                    <div class="avatar">
                        <img :src="avatar">
                    </div>
                </td>
                <td>
                    <CropUpload
                            @crop-upload-success="uploadSuccess"
                            field="image"
                            :width="300"
                            :height="300"
                            url="/api/upload/image"
                            v-model="show">
                    </CropUpload>
                    <Button @click="toggleShow">更改头像</Button>

                    <!--<Upload-->
                            <!--action="/api/upload/image"-->
                            <!--name="image"-->
                            <!--:show-upload-list="false"-->
                            <!--:on-success="uploadSuccess">-->
                        <!--<Button>更改头像</Button>-->
                    <!--</Upload>-->
                </td>
            </tr>
            <tr>
                <td>
                    <div class="username">
                        用户名
                    </div>
                </td>
                <td>
                    <Input v-model="username" style="width: 200px;" />
                </td>
            </tr>
            <tr>
                <td>
                    <div class="save">
                        <Button type="primary" @click="saveInfo">保存</Button>
                    </div>
                </td>
            </tr>
        </table>
    </Row>
</template>

<script>
    import CropUpload from 'vue-image-crop-upload';

    export default {
        name: 'SettingBasic',
        data() {
            return {
                avatar: '',
//                thumb_avatar: '',
                username: '',
                show: false
            }
        },
        methods: {
            getUserinfo() {
                this.axios.post('/userinfo')
                    .then(res => {
                        if (res.data.code === 0) {
                            this.avatar = res.data.data.avatar;
//                            this.thumb_avatar = res.data.data.thumb_avatar;
                            this.username = res.data.data.username;
                        } else {
                            this.$Message.error(res.data.msg);
                        }
                    })
            },
            /**
             * 头像上传成功
             * @param res
             * @param file
             */
            uploadSuccess(res, file) {
                this.show = false;
                if (res.code === 0) {
                    this.avatar = res.data.avatar;
//                    this.thumb_avatar = res.data.thumb_avatar;
                } else {
                    this.$Message.error(res.msg);
                }
            },
            /**
             * 保存用户信息
             */
            saveInfo() {
                if (this.avatar === '') {
                    this.$Message.error('用户头像不能为空');
                    return;
                }
                if (this.username === '') {
                    this.$Message.error('用户名不能为空');
                    return;
                }
                this.axios.post('/save_info', {
                    avatar: this.avatar,
                    username: this.username
                })
                    .then(res => {
                        if (res.data.code === 0) {
                            this.$Message.success(res.data.msg);
                            this.$store.dispatch('update_userinfo', res.data.data);
                        } else {
                            this.$Message.error(res.data.msg);
                        }
                    })
            },
            toggleShow() {
                this.show = !this.show;
            },

        },
        mounted() {
            this.getUserinfo();
        },
        components: {
            CropUpload
        }
    };
</script>

<style lang="less" scoped rel="stylesheet/less">
    .avatar {
        margin-bottom: 30px;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        overflow: hidden;
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
    .username {
        margin: 30px 0;
    }
    .save {
        margin: 30px 0;
        button {
            width: 120px;
        }
    }
    table.basic {
        td:first-child {
            width: 150px;
        }
    }
</style>
