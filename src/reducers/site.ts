import {site as actions} from '../constants/actions';
import SiteModel from "../models/SiteModel";

const defaultState = new SiteModel();

const site = (state = defaultState, action) => {
    if (action.type === actions.GOT) {
        return new SiteModel({...state, ...action.data});
    }
    return state;
};

export default site;
