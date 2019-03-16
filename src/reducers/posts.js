import {posts as actions} from "../constants/actions";
import PostsModel from "../models/PostsModel";

const defaultState = new PostsModel();

const posts = (state = defaultState, action) => {
    if (action.type === actions.GOT_POSTS) {
        return new PostsModel({
            ...state,
            didLoad: true,
            posts: action.data
        })
    }
    if (action.type === actions.GOT_POST) {
        return new PostsModel({
            ...state,
            didPostLoad: true,
            post: action.data
        });
    }
    if (action.type === actions.GET_POST) {
        return new PostsModel({
            ...state,
            didPostLoad: false,
            post: null
        });
    }

    return state;
};

export default posts;

