import axios from "axios";
import {main} from '../constants/main';
import {menu as actions} from '../constants/actions';

const menus = {
    getMenu(dispatch, slug) {
        dispatch({type: actions.GET_MENU});
        axios.get(`${main.baseUrl}/wp-json/menus/v1/menus/${slug}`)
            .then((response) => dispatch({
                type: actions.GOT_MENU,
                success: true,
                data: response.data
            }))
            .catch((error) => dispatch({
                type: actions.GOT_MENU,
                error: error.message,
                data: null
            }));
    }
};

export {
    menus
};