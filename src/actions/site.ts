import axios from "axios";
import {main} from '../constants/main';
import {site as actions} from '../constants/actions';

const site = {
    get(dispatch) {
        dispatch({type: actions.GET});
        axios.get(`${main.baseUrl}/wp-json/`)
            .then((response) => dispatch({
                type: actions.GOT,
                success: true,
                data: response.data
            }))
            .catch((error) => dispatch({
                type: actions.GOT,
                error: error.message,
                data: null
            }));
    }
};

export {
    site
};