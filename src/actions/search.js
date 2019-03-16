import axios from "axios";
import {main} from '../constants/main';
import {search as actions} from '../constants/actions';

const search = {
    get(dispatch, term) {
        dispatch({type: actions.GET_SEARCH_RESULTS, data: {loading: true, results: null}});
        axios.get(`${main.baseUrl}/wp-json/wp/v2/search?search=${term}`)
            .then((response) => dispatch({
                type: actions.GOT_SEARCH_RESULTS,
                success: true,
                data: {results: response.data, loading: false}
            }))
            .catch((error) => dispatch({
                type: actions.GOT_SEARCH_RESULTS,
                error: error.message,
                data: {loading: false, results: null}
            }));
    }
};

export {
    search
};