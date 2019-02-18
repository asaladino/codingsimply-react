import {posts as actions} from "../constants/actions";

const defaultState = {
    posts: [],
    post: null,
    didLoad: false,
    hasLoaded: function () {
        return this.didLoad;
    },
    getId: function (post) {
        const {id} = post;
        return id;
    },
    getTitle: function (post) {
        if (post == null && this.post == null) {
            return '';
        }
        if (post == null) {
            const {rendered} = this.post.title;
            return rendered;
        }
        const {rendered} = post.title;
        return rendered;
    },
    getDate: function (post) {
        const {date} = post;
        return date;
    },
    getExcept: function (post) {
        const {rendered} = post.excerpt;
        return rendered;
    },
    getContent: function (post) {
        if (post == null && this.post == null) {
            return '';
        }
        if (post == null) {
            const {rendered} = this.post.content;
            return rendered;
        }
        const {rendered} = post.content;
        return rendered;
    },
    getUrl: function (post) {
        const {slug} = post;
        return `/posts/${slug}`;
    }
};

const posts = (state = defaultState, action) => {
    if (action.type === actions.GOT_POSTS) {
        return {
            ...state,
            didLoad: true,
            posts: action.data
        }
    }
    if (action.type === actions.GOT_POST) {
        return {
            ...state,
            post: action.data
        }
    }

    return state;
};

export default posts;

