<template>
    <Card v-show="status">
        <div>
            <router-link :to="`/post/show/${article.id}`" class="article-item">
                <h2 class="title" v-html="article.title"></h2>
                <p class="description" v-html="article.description"></p>
            </router-link>
            <div class="footer">
                <div class="tags">
                    <Tag v-for="tag in article.tags" :key="tag" color="blue">{{tag}}</Tag>
                </div>
                <div class="author">
                    <Button type="text" v-if="$store.state.userinfo.userinfo.id === article.creator_id" style="color: #bbbec4;" @click="deleteArticle">删除</Button>
                    {{article.author}} | {{article.time}} |
                    <Icon type="fireball icon"></Icon>
                    {{article.hot}}
                </div>
            </div>
        </div>
    </Card>
</template>

<script>
    export default {
        props: {
            article: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {
                status: true
            }
        },
        methods: {
            deleteArticle() {
                this.$Modal.confirm({
                    title: '提示',
                    content: '<p>是否确认删除?</p>',
                    onOk: () => {
                        this.axios.delete('/post', {
                            params: {
                                id: this.article.id
                            }
                        })
                            .then(res => {
                                if (res.data.code === 0) {
                                    this.$Message.success(res.data.msg);
                                    this.status = false;
                                } else {
                                    this.$Message.error(res.data.msg);
                                }
                            })
                    }
                });
            }
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    .article-item {
        margin-bottom: 15px;
        display: block;
        color: #495060;
        &:hover {
            color: #495060;
        }
        .title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .description {
            word-break: break-all;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        .footer {
            margin-top: 10px;
            border-top: 1px solid #e9eaec;
            padding-top: 10px;
            display: flex;
            justify-content: center;
            .tags {
                width: calc(~'100% - 200px');
            }
            .author {
                /*display: flex;*/
                align-items: center;
                justify-content: flex-end;
                width: 240px;
                text-align: right;
                font-size: 12px;
                color: #80848f;
                .icon {
                    margin: 0 5px;
                }
            }
        }
    }
</style>
