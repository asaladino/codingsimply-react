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
        if (this.getTitle().toLowerCase() === 'profile') {
            return 'user-alt';
        }
        if (this.getTitle().toLowerCase() === 'portfolio') {
            return 'bookmark';
        }
        if (this.getTitle().toLowerCase() === 'books') {
            return 'book';
        }
        return this.getTitle().toLowerCase();
    }

    getIconPrefix() {
        if (this.getTitle().toLowerCase() === 'github') {
            return 'fab';
        }
        return 'fas';
    }

    getId() {
        return this.ID;
    }

    isInternalLink() {
        for(let alias of main.aliases) {
            if(this.url.indexOf(alias) > 0) {
                return true;
            }
        }
        return false;
    }

    getUrl() {
        return this.url;
    }

    getInternalUrl() {
        let url = this.url.replace('https://', '').replace('http://', '');
        for(let alias of main.aliases) {
            url = url.replace(alias, '');
        }
        return url;
    }

    isCurrentItem() {
        return this.isInternalLink() && this.getInternalUrl() === window.location.pathname;
    }

    isActive() {
        if(this.isCurrentItem()) {
            return 'is-active';
        }
    }
}