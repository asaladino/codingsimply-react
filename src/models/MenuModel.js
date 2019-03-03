import MenuItemModel from "./MenuItemModel";

export default class MenuModel {

    items: [] = null;

    constructor(state) {
        Object.assign(this, state);
    }

    hasLoaded() {
        return this.items !== null;
    }

    getItems() {
        if (this.items === null) {
            return [];
        }

        return this.items.map(item => new MenuItemModel(item));
    }
}