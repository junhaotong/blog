<template>
    <Row class="content">
        <div class="article-list">
            <ToTop></ToTop>
            <transition-group
                    tag="div"
                    name="staggered-fade"
                    :css="false"
                    @before-enter="beforeEnter"
                    @enter="enter">
                <ArticleItem
                        class="article-item"
                        v-for="(article, index) in articles"
                        :article="article"
                        :key="article.id"
                        :data-index="article._index">
                </ArticleItem>
            </transition-group>
            <div  v-if="hasMore && page < 3" class="articles-footer text-center">
                <Spin fix></Spin>
            </div>
            <div v-if="hasMore && page >= 3" class="articles-footer">
                <Button long @click="getArticles">加载更多...</Button>
            </div>
            <div v-if="!hasMore" class="articles-footer text-center">暂无更多数据!</div>
        </div>
        <div class="TopstorySideBar">

        </div>
    </Row>
</template>

<script>
    import 'velocity-animate';

    import {
        ToTop,
        ArticleItem
    } from 'Components';

    export default {
        name: 'homePage',
        data() {
            return {
                articles: [],
                page: 1,
                loadingStatus: false,
                hasMore: true
            }
        },
        methods: {
            /**
             * 获取文章列表
             */
            getArticles() {
                if (!this.hasMore) return;
                if (this.loadingStatus) return;
                this.loadingStatus = true;
                this.axios.get('/post', {
                    params: {
                        page: this.page
                    }
                })
                    .then(res => {
                        if (res.data.code === 0) {
                            res.data.data.data.forEach((item, index) => {
                                item._index = index;
                            })
                            this.articles = this.articles.concat(res.data.data.data);
                            if (res.data.data.data.length) {
                                this.page++;
                            } else {
                                this.hasMore = false;
                            }
                        } else {
                            this.$Message.error(res.data.msg);
                        }
                        this.loadingStatus = false;
                    })
            },
            beforeEnter: function (el) {
                el.style.opacity = 0;
                el.style.transform = 'translateY(100px)';
            },
            enter (el, done) {
                var delay = el.dataset.index * 100
                Velocity(
                    el,
                    {opacity: 1, translateY: 0},
                    {delay: delay, easing: "spring", complete: done}
                )
                done();
            },
            initScroll() {
                document.addEventListener('scroll', (e) => {
                    let scrollY;
                    if (self.pageYOffset) {
                        scrollY = self.pageYOffset;
                    } else if (document.documentElement && document.documentElement.scrollTop) {
                        scrollY = document.documentElement.scrollTop;
                    } else if (document.body) {
                        scrollY = document.body.scrollTop;
                    }

                    if (scrollY >= document.body.scrollHeight - 800 && this.page < 3) {
                        this.getArticles();
                    }
                })
            }
        },
        mounted() {
            window.scrollY = 0;
            this.getArticles();
            this.initScroll();
        },
        components: {
            ToTop,
            ArticleItem
        }
    };
</script>

<style lang="less" scoped rel="stylesheet/less">
    .content {
        .article-list {
            width: calc(~'100% - 300px');
        }
        .TopstorySideBar {
            width: 300px;
        }
    }

    .article-item {
        transition: all .5s ease;
    }

    .articles-footer {
        display: inline-block;
        width: 100%;
        height: 30px;
        position: relative;
    }
</style>
