<template>
        <router-link :to="`/post/show/${article.id}`" class="article-item">
            <Card>
                <div>
                    <h2 class="title" v-html="article.title"></h2>
                    <p class="description" v-html="article.description"></p>
                    <div class="footer">
                        <div class="tags">
                            <Tag v-for="tag in article.tags" :key="tag" color="blue">{{tag}}</Tag>
                        </div>
                        <div class="author">
                            {{article.author}} | {{article.time}} | <Icon type="fireball icon"></Icon>{{article.hot}}
                    </div>
                    </div>
                </div>
            </Card>
        </router-link>
</template>

<script>
    export default {
        props: {
            article: {
                type: Object,
                default: {}
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
                display: flex;
                align-items: center;
                justify-content: flex-end;
                width: 200px;
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
