import { main } from '../constants/main';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core'


export default class MenuItemModel {
    ID = 0;
    title = '';
    url = '';
    constructor(state: any) {
        Object.assign(this, state);
    }
    getTitle() {
        return this.title;
    }
    getIcon(): IconName {
        if (this.getTitle().toLowerCase() === 'profile') {
            return 'user-alt';
        }
        if (this.getTitle().toLowerCase() === 'portfolio') {
            return 'bookmark';
        }
        if (this.getTitle().toLowerCase() === 'books') {
            return 'book';
        }
        if (this.getTitle().toLowerCase() === 'stack overflow') {
            return 'stack-overflow';
        }
        return this.getTitle().toLowerCase() as IconName;
    }
    getIconPrefix(): IconPrefix {
        if (
            this.getTitle().toLowerCase() === 'github' ||
            this.getTitle().toLowerCase() === 'stack overflow'
        ) {
            return 'fab';
        }
        return 'fas';
    }
    getId() {
        return this.ID;
    }
    isInternalLink() {
        for (let alias of main.aliases) {
            if (this.url.indexOf(alias) > 0) {
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
        for (let alias of main.aliases) {
            url = url.replace(alias, '');
        }
        return url;
    }
    isCurrentItem() {
        return this.isInternalLink() && this.getInternalUrl() === window.location.pathname;
    }
    isActive() {
        if (this.isCurrentItem()) {
            return 'is-active';
        }
    }
}
