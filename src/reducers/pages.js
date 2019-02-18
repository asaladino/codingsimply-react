import {pages as actions} from "../constants/actions";

const defaultState = {
    pages: [],
    page: null,
    didLoad: false,
    hasLoaded: function () {
        return this.didLoad;
    },
    getTitle: function (page) {
        const {rendered} = page.title;
        return rendered;
    },
    getContent: function (page) {
        if(page == null && this.page == null) {
            return '';
        }
        if (page == null) {
            const {rendered} = this.page.content;
            return rendered;
        }
        const {rendered} = page.content;
        return rendered;
    }
};

const pages = (state = defaultState, action) => {
    if (action.type === actions.GOT_PAGES) {
        return {
            ...state,
            didLoad: true,
            pages: action.data
        }
    }
    if (action.type === actions.GOT_PAGE) {
        return {
            ...state,
            page: action.data
        }
    }

    return state;
};

export default pages;

