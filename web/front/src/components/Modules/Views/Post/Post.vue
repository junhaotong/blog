<template>
    <Row>
        <i-col class="title">
            <Input size="large" placeholder="文章标题" v-model="title"/>
        </i-col>
        <i-col>
            <div id="editor" style="min-height: 300px;height: auto;"></div>
        </i-col>
        <i-col class="addTag">
            <Input class="tanName" placeholder="标签名" v-model="tagName"/>
            <Button icon="ios-plus-empty" type="dashed" @click="addTag">添加标签</Button>
        </i-col>
        <i-col>
            <Tag v-for="tag in tabList" color="blue" :key="tag" :name="tag" closable @on-close="removeTag">{{tag}}</Tag>
        </i-col>
        <i-col>
            <Form :label-width="90">
                <FormItem label="选择文章分类:">
                    <Select>
                        <Option
                            v-for="category in categoryList"
                            :label="category.title"
                            :value="category.id"
                            :key="category.id">
                        </Option>
                    </Select>
                </FormItem>
            </Form>
        </i-col>
    </Row>
</template>

<script>
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
            removeTag() {

            }
        },
//        created() {
//            if (!this.$store.state.userinfo.userinfo.token) {
//                this.$Message.error('请先登录或注册');
//                this.$router.push('/sign');
//            }
//        },
        mounted() {
            this.editor = new wangEditor('#editor');
            this.editor.customConfig.debug = true;
            console.log(this.editor);
            // 开启base64上传图片
            this.editor.customConfig.uploadImgShowBase64 = true;
            this.editor.customConfig.zIndex = 1;
            this.editor.customConfig.height = 500;
            this.editor.create();
        }
    };
</script>

<style lang="less" scoped rel="stylesheet/less">
    .title {
        margin-bottom: 20px;
    }
    .addTag {
        margin: 20px 0;
        .tanName {
            width: 150px;
        }
    }
</style>
