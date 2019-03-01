import {main} from "../constants/main";

export default class MenuItemModel {

    ID = 0;
    title = '';
    url = '';

    getTitle() {
        return this.title;
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