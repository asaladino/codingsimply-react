import axios from 'axios';
import {main} from '../constants/main';
import {books as actions} from '../constants/actions';

const books = {
    getBooks(dispatch) {
        dispatch({type: actions.GET_BOOKS});
        axios.get(`${main.apiBaseUrl}/books/?format=json`)
            .then((response) => dispatch({
                type: actions.GOT_BOOKS,
                success: true,
                data: response.data
            }))
            .catch((error) => dispatch({
                type: actions.GOT_BOOKS,
                error: error.message,
                data: null
            }));
    },

    setDisplay(dispatch, display) {
        dispatch({type: actions.SET_BOOK_DISPLAY, data: display});
    }
};

export {
    books
};