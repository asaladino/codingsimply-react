import PageModel from "./PageModel";
export default class PagesModel {
    pages = [];
    page = null;
    featuredMedia = null;
    didLoad = false;
    slug = null;
    pageFound = true;
    constructor(state = {}) {
        Object.assign(this, state);
    }
    hasLoaded() {
        return this.didLoad;
    }
    getPage() {
        return new PageModel({
            ...this.page,
            featuredMedia: this.featuredMedia
        });
    }
}
