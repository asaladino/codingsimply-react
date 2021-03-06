import {projects as actions} from "../constants/actions";
import ProjectsModel from "../models/ProjectsModel";
import ProjectModel from "../models/ProjectModel";

const defaultState = new ProjectsModel();

const projects = (state = defaultState, action) => {
    if (action.type === actions.GOT_PROJECTS) {
        return new ProjectsModel({
            ...state,
            didLoad: true,
            projects: action.data.map(project => new ProjectModel(project))
        });
    }
    if (action.type === actions.GOT_PROJECT) {
        return new ProjectsModel({
            ...state,
            didLoad: true,
            projects: action.data.projects.map(project => new ProjectModel(project)),
            project: action.data.project === null ? null : new ProjectModel(action.data.project)
        });
    }
    if (action.type === actions.SET_PROJECT_DISPLAY) {
        return new ProjectsModel({
            ...state,
            didLoad: true,
            display: action.data
        });
    }

    return state;
};

export default projects;

