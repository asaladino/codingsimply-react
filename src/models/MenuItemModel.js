import {main} from "../constants/main";

export default class MenuItemModel {

    ID = 0;
    title = '';
    url = '';

    constructor(state) {
        Object.assign(this, state);
    }

    getTitle() {
        return this.title;
    }

    getIcon() {
        if(this.getTitle().toLowerCase() === 'profile') {
            return 'user-alt';
        }
        if(this.getTitle().toLowerCase() === 'portfolio') {
            return 'bookmark';
        }
        return this.getTitle().toLowerCase();
    }

    getId() {
        return this.ID;
    }

    getUrl() {
        return this.url.replace('https://', '')
            .replace('http://', '')
            .replace(main.domain, '');
    }
}