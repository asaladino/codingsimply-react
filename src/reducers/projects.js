import {projects as actions} from "../constants/actions";

const defaultState = {
    projects: [],
    project: null,
    didLoad: false,
    hasLoaded: function () {
        return this.didLoad;
    },
    getTitle: function (project) {
        if (project == null && this.project == null) {
            return '';
        }
        if (project == null) {
            const {rendered} = this.project.title;
            return rendered;
        }
        const {rendered} = project.title;
        return rendered;
    },
    getContent: function (project) {
        if (project == null && this.project == null) {
            return '';
        }
        if (project == null) {
            const {rendered} = this.project.content;
            return rendered;
        }
        const {rendered} = project.content;
        return rendered;
    }
};

const projects = (state = defaultState, action) => {
    if (action.type === actions.GOT_PROJECTS) {
        return {
            ...state,
            didLoad: true,
            projects: action.data
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

