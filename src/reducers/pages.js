import {pages as actions} from "../constants/actions";
import PagesModel from "../models/PagesModel";

const defaultState = new PagesModel();

const pages = (state = defaultState, action) => {
    if (action.type === actions.GOT_PAGES) {
        return new PagesModel({
            ...state,
            didLoad: true,
            pages: action.data
        });
    }
    if (action.type === actions.GOT_PAGE) {
        return new PagesModel({
            ...state,
            didLoad: true,
            page: action.data
        });
    }
    if (action.type === actions.GET_FEATURED_MEDIA) {
        return new PagesModel({
            ...state,
            featuredMedia: null
        });
    }
    if (action.type === actions.GOT_FEATURED_MEDIA) {
        return new PagesModel({
            ...state,
            featuredMedia: action.data
        });
    }

    return state;
};

export default pages;

