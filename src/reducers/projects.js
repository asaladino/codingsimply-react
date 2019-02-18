import {projects as actions} from "../constants/actions";

const defaultState = {
    projects: [],
    project: null,
    didLoad: false,
    hasLoaded: function () {
        return this.didLoad;
    },
    getTitle: function (post) {
        const {rendered} = post.title;
        return rendered;
    },
    getContent: function (post) {
        if (post == null && this.project == null) {
            return '';
        }
        if (post == null) {
            const {rendered} = this.project.content;
            return rendered;
        }
        const {rendered} = post.content;
        return rendered;
    }
};

const projects = (state = defaultState, action) => {
    if (action.type === actions.GOT_PROJECTS) {
        return {
            ...state,
            didLoad: true,
            project: action.data
        }
    }
    if (action.type === actions.GOT_PROJECT) {
        return {
            ...state,
            project: action.data
        }
    }

    return state;
};

export default projects;

