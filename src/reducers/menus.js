import {menu as actions} from "../constants/actions";
import MenuModel from "../models/MenuModel";

const defaultState = new MenuModel();

const menus = (state = defaultState, action) => {
    if (action.type === actions.GOT_MENU) {
        return new MenuModel({
            ...state,
            ...action.data
        });
    }

    return state;
};

export default menus;

