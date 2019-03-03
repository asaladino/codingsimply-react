import {menu as actions} from "../constants/actions";
import MenuModel from "../models/MenuModel";


// @todo move to model.
const defaultState = new MenuModel();

const menus = (state = defaultState, action) => {
    if (action.type === actions.GOT_MENU) {
        console.log('got stuff.');
        console.log(action);
        return {
            ...state,
            menu: action.data
        }
    }

    return state;
};

export default menus;

