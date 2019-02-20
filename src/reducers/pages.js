import {pages as actions} from "../constants/actions";

const defaultState = {
    pages: [],
    page: null,
    featuredMedia: null,
    didLoad: false,
    hasLoaded: function () {
        return this.didLoad;
    },
    getTitle: function (page) {
        if(page == null && this.page == null) {
            return '';
        }
        if (page == null) {
            const {rendered} = this.page.title;
            return rendered;
        }
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
    },
    getFeaturedMediaLarge: function() {
        if(this.featuredMedia !== null) {
            return this.featuredMedia.media_details.sizes.large.source_url;
        }
    },
    getFeaturedMediaAlt: function() {
        if(this.featuredMedia !== null) {
            return this.featuredMedia.alt_text;
        }
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
    if (action.type === actions.GET_FEATURED_MEDIA) {
        return {
            ...state,
            featuredMedia: null
        }
    }
    if (action.type === actions.GOT_FEATURED_MEDIA) {
        return {
            ...state,
            featuredMedia: action.data
        }
    }

    return state;
};

export default pages;

