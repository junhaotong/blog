<template>
    <Row>
        <Form :rules="rules" :model="Form" ref="Form" :label-width="100">
            <FormItem label="图片">
                <Upload
                        action="/api/upload/image"
                        name="image"
                        :show-upload-list="false"
                        :on-success="uploadSuccess">
                    <div class="upload">
                        <img v-if="Form.image" :src="'/' + Form.image" alt="">
                        <template v-else>
                            <Icon type="ios-cloud-upload-outline"></Icon>
                            上传图片
                        </template>
                    </div>
                </Upload>
            </FormItem>
            <FormItem label="分类名" prop="name">
                <Input v-model="Form.name" placeholder="文章分类名" class="middle-input"/>
            </FormItem>
            <FormItem label="描述">
                <div id="editor"></div>
            </FormItem>
            <FormItem>
                <i-col :xs="12" :sm="6" :md="4" :lg="4">
                    <Button type="primary" size="large" long @click="submit">确定</Button>
                </i-col>
            </FormItem>
        </Form>
    </Row>
</template>

<script>
    import Add from './Add';
    export default Add;
</script>

<style lang="less" rel="stylesheet/less">

</style>
