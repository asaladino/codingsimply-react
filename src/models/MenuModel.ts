import MenuItemModel from "./MenuItemModel";
export default class MenuModel {
    items: MenuItemModel[];
    constructor(state: any) {
        this.items = null;
        Object.assign(this, state);
    }
    hasLoaded() {
        return this.items !== null;
    }
    getItems(): MenuItemModel[] {
        if (this.items === null) {
            return [];
        }
        return this.items.map(item => new MenuItemModel(item));
    }
}
