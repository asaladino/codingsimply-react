import {site as actions} from '../constants/actions';

const defaultState = {
    name: '',
    description: '',
    url: '',
    hasLoaded: function () {
        return this.name !== '';
    }
};

const site = (state = defaultState, action) => {
    if (action.type === actions.GOT) {
        const {name, description, url} = action.data;
        return {
            ...state,
            name: name,
            description: description,
            url: url
        }
    }
    return state;
};



export default site;
