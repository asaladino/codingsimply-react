import SearchModel from "../models/SearchModel";
import {search as actions} from "../constants/actions";

const defaultState = new SearchModel();

const search = (state = defaultState, action) => {
    if (action.type === actions.GET_SEARCH_RESULTS) {
        return new SearchModel({...state, ...action.data});
    }
    if (action.type === actions.GOT_SEARCH_RESULTS) {
        return new SearchModel({...state, ...action.data});
    }
    if(action.type === actions.SET_SEARCH_TERM) {
        return new SearchModel({...state, ...action.data});
    }

    return state;
};

export default search;