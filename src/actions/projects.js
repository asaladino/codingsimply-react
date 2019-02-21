import axios from "axios";
import {main} from '../constants/main';
import {projects as actions} from '../constants/actions';

const projects = {
    getProjects(dispatch) {
        dispatch({type: actions.GET_PROJECTS});
        axios.get(`${main.baseUrl}/wp-json/wp/v2/projects`)
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
    getProject(dispatch, slug) {
        dispatch({type: actions.GET_PROJECT});
        dispatch({type: actions.GOT_PROJECT, data: null});
        axios.get(`${main.baseUrl}/wp-json/wp/v2/projects/?slug=${slug}`)
            .then((response) => dispatch({
                type: actions.GOT_PROJECT,
                success: true,
                data: response.data[0]
            }))
            .catch((error) => dispatch({
                type: actions.GOT_PROJECT,
                error: error.message,
                data: null
            }));
    }
};

export {
    projects
};