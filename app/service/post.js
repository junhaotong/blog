module.exports = class extends think.Service {
    constructor(props) {
        super(props);
        this.Post = this.model('post');
    }

    /**
     * 新增文章
     * @param title
     * @param content
     * @param category_id
     * @param creator_id
     * @returns {*|Promise}
     */
    addPost(title, content, category_id, creator_id) {
        let post = {
            title: title,
            content: content,
            category_id: category_id,
            creator_id: creator_id,
            create_time: Date.now()
        };

        return this.Post.addPost(post);
    }
};