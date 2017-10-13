<template>
    <Row class="article-content">
        <i-col v-if="post.id">
            <div class="article-head">
                <h2 class="title">{{post.title}}</h2>
                <div class="info">
                    <div class="author">
                        <router-link :to="'/author/' + post.creator_id" class="name">{{post.author}}</router-link>
                        <Tag type="border" color="blue">作者</Tag>
                    </div>
                    <div class="meta">
                        <div class="time">{{post.time}}</div>
                        <div class="hot">
                            <Icon type="fireball"></Icon>
                            {{post.hot}}
                        </div>
                        <div class="category">
                            <router-link :to="'/category/' + post.category_id">{{post.category}}</router-link>
                        </div>
                    </div>
                    <div class="edit" v-if="$store.state.userinfo.userinfo.id === post.creator_id">
                        <Button @click="$router.push(`/post/edit/${post.id}`)"><Icon type="edit"></Icon> 编辑文章</Button>
                    </div>
                </div>
            </div>
            <div class="content" v-html="post.content"></div>
            <div class="tags">
                <Tag color="blue" v-for="tag in post.tags" :key="tag">{{tag}}</Tag>
            </div>
        </i-col>
    </Row>
</template>

<script>
    export default {
        name: 'PostShow',
        data() {
            return {
                post: {}
            }
        },
        methods: {
            /**
             * 获取文章
             */
            getPost() {
                this.axios.get(`/post/${this.$route.params.id}`)
                    .then(res => {
                        if (res.data.code === 0) {
                            this.post = res.data.data;
                        } else {
                            this.$Message.error(res.data.msg);
                            this.$router.push('/');
                        }
                    })
            }
        },
        mounted() {
            this.getPost();
        }
    };
</script>

<style lang="less" scoped rel="stylesheet/less">
    .article-content {
        font-size: 16px;
        margin: 0 auto;
        width: 80%;
        min-width: 500px;
        .article-head {
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 1px solid #e9eaec;
            .title {
                font-size: 25px;
                margin: 0 0 15px 0;
            }
            .info {
                display: flex;
                align-items: center;
                .author {
                    display: flex;
                    font-size: 16px;
                    .name {
                        margin-right: 10px;
                        color: #80848f;
                    }
                }
                .meta {
                    display: flex;
                    align-items: center;
                    flex: 1;
                    color: #80848f;
                    font-size: 12px;
                    margin-left: 20px;
                    .hot {
                        margin-left: 10px;
                    }
                    .category {
                        margin-left: 15px;
                        font-size: 14px;
                    }
                }
            }
        }
        .tags {
            margin-top: 10px;
            border-top: 1px solid #e9eaec;
            padding-top: 10px;
        }
    }
</style>
