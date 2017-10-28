<template>
    <Form :label-width="80">
        <FormItem label="图片">
            <div class="upload">
                <img :src="category.image" alt="">
            </div>
        </FormItem>
        <FormItem label="分类名">
            <span>{{category.name}}</span>
        </FormItem>
        <FormItem label="描述">
            <div v-html="category.description"></div>
        </FormItem>
    </Form>
</template>

<script>
    export default {
        name: 'CategoryDetail',
        data() {
            return {
                category: {
                    image: '',
                    name: '',
                    description: ''
                }
            }
        },
        methods: {
            getDetail() {
                this.axios.get(`/category/${this.$route.query.id}`)
                    .then(res => {
                        if (res.data.code === 0) {
                            let data = res.data.data;
                            this.category.image = data.image;
                            this.category.name = data.name;
                            this.category.description = data.description;
                        } else {
                            this.$Message.error(res.data.msg);
                            this.$router.push('/category/list');
                        }
                    })
            }
        },
        mounted() {
            this.getDetail();
        }
    };
</script>

<style lang="less" rel="stylesheet/less">

</style>
