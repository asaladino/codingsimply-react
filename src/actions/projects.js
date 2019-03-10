import axios from "axios";
import {main} from '../constants/main';
import {projects as actions} from '../constants/actions';

const projects = {
    getProjects(dispatch) {
        dispatch({type: actions.GET_PROJECTS});
        axios.get(`${main.baseUrl}/wp-json/cs/v1/projects`)
            .then((response) => dispatch({
                type: actions.GOT_PROJECTS,
                success: true,
                data: response.data
            }))
            .catch((error) => dispatch({
                type: actions.GOT_PROJECTS,
                error: error.message,
                data: null
            }));
    },

    setDisplay(dispatch, display) {
        dispatch({type: actions.SET_PROJECT_DISPLAY, data: display});
    },

    getProject(dispatch, projects, slug) {
        dispatch({type: actions.GET_PROJECT});
        dispatch({type: actions.GOT_PROJECT, data: {projects: [], project: null}});
        if (projects.hasLoaded()) {
            const project = projects.projects.filter(project => project.post_name === slug);
            dispatch({
                type: actions.GOT_PROJECT,
                success: true,
                data: {
                    projects: projects.projects,
                    project: project.length > 0 ? project[0] : null
                }
            })
        } else {
            axios.get(`${main.baseUrl}/wp-json/cs/v1/projects`)
                .then((response) => {
                    const project = response.data.filter(project => project.post_name === slug);
                    dispatch({
                        type: actions.GOT_PROJECT,
                        success: true,
                        data: {
                            projects: response.data,
                            project: project.length > 0 ? project[0] : null
                        }
                    })
                })
                .catch((error) => dispatch({
                    type: actions.GOT_PROJECTS,
                    error: error.message,
                    data: null
                }));
        }
    }
};

export {
    projects
};