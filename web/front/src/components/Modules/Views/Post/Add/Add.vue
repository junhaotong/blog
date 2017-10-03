<template>
    <Row>
        <i-col class="title">
            <Input size="large" placeholder="文章标题" v-model="postForm.title"/>
        </i-col>
        <i-col>
            <div id="editor" style="min-height: 300px;height: auto;"></div>
        </i-col>
        <i-col class="addTag">
            <Input class="tanName" placeholder="标签名" v-model="tagName"/>
            <Button icon="ios-plus-empty" type="dashed" @click="addTag">添加标签</Button>
            (最多添加5个标签)
        </i-col>
        <i-col>
            <Tag v-for="tag in postForm.tags" color="blue" :key="tag" :name="tag" closable @on-close="removeTag">{{tag}}</Tag>
        </i-col>
        <i-col>
            <Form :label-width="90">
                <FormItem label="选择文章分类:">
                    <Select style="width: 200px;" v-model="postForm.category_id">
                        <Option
                                v-for="category in categoryList"
                                :value="category.id"
                                :key="category.id">
                            {{category.name}}
                        </Option>
                    </Select>
                </FormItem>
            </Form>
        </i-col>
        <i-col>
            <Button type="primary" size="large" @click="submit">发布文章</Button>
        </i-col>
    </Row>
</template>

<script>
    import Add from './Add';
    export default Add;
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

    .ivu-tag {
        margin-bottom: 20px;
    }
</style>
