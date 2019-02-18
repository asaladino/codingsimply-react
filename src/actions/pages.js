import axios from "axios";
import {main} from '../constants/main';
import {pages as actions} from '../constants/actions';

const pages = {
    getPages(dispatch) {
        dispatch({type: actions.GET_PAGES});
        axios.get(`${main.baseUrl}/wp-json/wp/v2/pages`)
            .then((response) => dispatch({
                type: actions.GOT_PAGES,
                success: true,
                data: response.data
            }))
            .catch((error) => dispatch({
                type: actions.GOT_PAGES,
                error: error.message,
                data: null
            }));
    },
    getPage(dispatch, id) {
        dispatch({type: actions.GET_PAGE});
        axios.get(`${main.baseUrl}/wp-json/wp/v2/pages/${id}`)
            .then((response) => dispatch({
                type: actions.GOT_PAGE,
                success: true,
                data: response.data
            }))
            .catch((error) => dispatch({
                type: actions.GOT_PAGE,
                error: error.message,
                data: null
            }));
    }
};

export {
    pages
};