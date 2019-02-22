import {projects as actions} from "../constants/actions";

const defaultState = {
    projects: [],
    project: null,
    didLoad: false,
    hasLoaded: function () {
        return this.didLoad;
    },
    getPromoted: function () {
        return this.projects.filter(project => {
            return project.meta.promote;
        });
    },
    getInitials: function (project) {
        const title = this.getTitle(project);
        const parts = title.split(' ');
        if (parts.length === 1) {
            return parts[0].substr(0, 1).toUpperCase();
        }
        return (parts[0].substr(0, 1) + parts[1].substr(0, 1)).toUpperCase();
    },
    getTitle: function (project) {
        if (project == null && this.project == null) {
            return '';
        }
        if (project == null) {
            const {post_title} = this.project;
            return post_title;
        }
        const {post_title} = project;
        return post_title;
    },
    getContent: function (project) {
        if (project == null && this.project == null) {
            return '';
        }
        if (project == null) {
            const {post_content} = this.project;
            return post_content;
        }
        const {post_content} = project;
        return post_content;
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
            projects: action.data.projects,
            project: action.data.project
        }
    }

    return state;
};

export default projects;

