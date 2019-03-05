import axios from "axios";
import {main} from '../constants/main';
import {search as actions} from '../constants/actions';

const search = {
    get(dispatch, term) {
        console.log(term);
        axios.get(`${main.baseUrl}/wp-json/wp/v2/search?search=${term}`)
            .then((response) => dispatch({
                type: actions.GOT_SEARCH_RESULTS,
                success: true,
                data: response.data
            }))
            .catch((error) => dispatch({
                type: actions.GOT_SEARCH_RESULTS,
                error: error.message,
                data: null
            }));
    }
};

export {
    search
};