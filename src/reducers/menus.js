import {menu as actions} from "../constants/actions";
import {main} from "../constants/main";

const defaultState = {
    menu: null,
    hasLoaded: function () {
        return this.menu !== null;
    },
    getItems: function () {
        if (this.menu === null) {
            return [];
        }
        return this.menu.items;
    },
    getTitle: function (item) {
        const {title} = item;
        return title;
    },
    getId: function (item) {
        const {ID} = item;
        return ID;
    },
    getUrl: function (item) {
        const {url} = item;
        return url.replace('https://', '')
            .replace('http://')
            .replace(main.domain, '');
    }
};

const menus = (state = defaultState, action) => {
    if (action.type === actions.GOT_MENU) {
        return {
            ...state,
            menu: action.data
        }
    }

    return state;
};

export default menus;

