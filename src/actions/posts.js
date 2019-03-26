import axios from "axios";
import {main} from '../constants/main';
import {posts as actions} from '../constants/actions';

const posts = {
    getPosts(dispatch) {
        dispatch({type: actions.GET_POSTS});
        axios.get(`${main.baseUrl}/wp-json/wp/v2/posts`)
            .then((response) => dispatch({
                type: actions.GOT_POSTS,
                success: true,
                data: response.data
            }))
            .catch((error) => dispatch({
                type: actions.GOT_POSTS,
                error: error.message,
                data: null
            }));
    },
    getPost(dispatch, slug) {
        dispatch({type: actions.GET_POST});
        axios.get(`${main.baseUrl}/wp-json/wp/v2/posts?slug=${slug}`)
            .then((response) => dispatch({
                type: actions.GOT_POST,
                success: true,
                data: response.data[0]
            }))
            .catch((error) => dispatch({
                type: actions.GOT_POST,
                error: error.message,
                data: null
            }));
    }
};

export {
    posts
};