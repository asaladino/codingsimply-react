import PostModel from "./PostModel";

export default class PostsModel {
    posts = [];
    post = null;
    didLoad = false;
    didPostLoad = false;

    getPosts() {
        return this.posts.map(post => new PostModel(post));
    }

    constructor(state = {}) {
        Object.assign(this, state);
    }

    hasLoaded() {
        return this.didLoad;
    }

    hasPostLoaded() {
        return this.didPostLoad && this.post !== null && this.post.id !== 0;
    }
}
