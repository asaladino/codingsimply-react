class PostsModel {
    posts = [];
    post = null;
    didLoad = false;
    didPostLoad = false;

    constructor(state = {}) {
        Object.assign(this, state);
    }

    hasLoaded() {
        return this.didLoad;
    }

    hasPostLoaded() {
        return this.didPostLoad;
    }

    getId(post) {
        const {id} = post;
        return id;
    }

    getTitle(post) {
        if (post == null && this.post == null) {
            return '';
        }
        if (post == null) {
            const {rendered} = this.post.title;
            return rendered;
        }
        const {rendered} = post.title;
        return rendered;
    }

    hasDate(post) {
        return this.getDate(post) !== null;
    }

    getDate(post) {
        if (post == null && this.post == null) {
            return null;
        }
        if (post == null) {
            const {date} = this.post;
            return date;
        }
        const {date} = post;
        return date;
    }

    getExcept(post) {
        const {rendered} = post.excerpt;
        return rendered;
    }

    getContent(post) {
        if (post == null && this.post == null) {
            return '';
        }
        if (post == null) {
            const {rendered} = this.post.content;
            return rendered;
        }
        const {rendered} = post.content;
        return rendered;
    }

    getUrl(post) {
        const {slug} = post;
        return `/posts/${slug}`;
    }
}

export default PostsModel;