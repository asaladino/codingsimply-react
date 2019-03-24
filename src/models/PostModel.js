class PostsModel {
    id = 0;
    title = {rendered: ''};
    date = '';
    excerpt = {rendered: ''};
    content = '';
    slug = '';

    constructor(state = {}) {
        Object.assign(this, state);
    }

    getId() {
        return this.id;
    }

    getTitle() {
        const {rendered} = this.title;
        return rendered;
    }

    hasDate() {
        return this.getDate() !== null;
    }

    getDate() {
        return this.date;
    }

    getExcept() {
        const {rendered} = this.excerpt;
        return rendered;
    }

    getContent() {
        const {rendered} = this.content;
        return rendered;
    }

    getUrl() {
        return `/posts/${this.slug}`;
    }
}

export default PostsModel;